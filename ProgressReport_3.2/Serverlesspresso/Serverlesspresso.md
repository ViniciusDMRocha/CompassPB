# Serverlesspresso

Para começar, primeiro precisamos entender o processo de pedido de cafeteria, ele segue o seguinte padrão:

- Os monitores suspensos exibem um código QR que muda a cada 5 minutos. Os clientes escaneiam esse código QR para fazer um pedido usando seu dispositivo móvel. O código QR é válido para 10 bebidas no período de 5 minutos e desaparece da tela quando não há mais bebidas disponíveis. Isso ajuda a evitar que os baristas sejam inundados com pedidos!
- O cliente faz o pedido no aplicativo da web carregado pelo código QR. O backend valida o pedido, cria um número de pedido e o disponibiliza para os baristas.
- Os baristas veem o pedido aparecer em seu próprio aplicativo. Eles podem alterar o status do pedido para indicar quando ele está sendo feito, quando é concluído ou se precisam cancelar o pedido.
- O cliente vê todas as atualizações do barista em seu dispositivo móvel. Os monitores suspensos também mostram o status das bebidas futuras e concluídas.

### Step Functions Workflow

Utilizando esse serviço a gente consegue ter uma visualização gráfica de como está nosso Workflow e de inicio começamos configurando ele.

Abaixo temos a descrição de como funciona o Workflow criado para o **Serverlesspresso**.

- Começamos nosso Workflow pelo Start e logo já fazermos um getItem no nosso DB utilizando o DynamoDB para ver se a loja está fechada ou aberta. Por isso a ferramenta que utilizamos é o estado do tipo `Choice`, o qual realiza uma verificação, nesse caso é se `$.GetStore.Item.storeOpen.BOOL` é true ou false, representando assim o estado atual da loja, aberta ou fechada.

- Loja fechada: o nosso Workflow já é redirecionado para um evento no qual é informado que a loja está fechada, seguindo assim para o estado final End.

- Loja aberta: realizamos outra verificação utilizando o Choice para saber se temos capacidade para um novo pedido, caso nosso sistema esteja cheio, é emitido o aviso de loja fechada e finaliza nosso Workflow. Caso tenha capacidade para novos pedidos, continuamos normalmente.

- Com a loja aberta e espaço para novos pedidos, o Workflow ficará aguardando por 15 minutos esses pedidos chegarem, caso não aconteça, se passa por um estado de passagem - Customer timeout e chega ao evento **Emit - Error timeout**. Caso algum cliente realize o pedido, um número de pedido vai ser gerado (ID do pedido, código para retirada, etc) e o Workflow começa aguardar a resposta do barista.

- Caso passe 15 minutos e o barista não tenha respondido, é chamado um estado de passagem - Barista timeout, passando assim para um próximo evento que é o PutEvents chamado **Emit - Error timeout**.

- No cenário ideal, ao barista responder o pedido do clinete, um evento chamado Emit - Order Finished é gerado e o nosso Workflow chega ao estado End.

### Routing Events

Em termos mais simples, um evento é um sinal de que o estado de um sistema mudou. Na AWS, ele é representado como uma mensagem JSON, contendo um conjunto de fatos sobre o que mudou e potencialmente qual é o estado atual do sistema.

Eventos são:

- Fatos: eles são baseados em algo que aconteceu.
- Imutáveis: eles não podem ser desfeitos. Por exemplo, um evento pode ser um novo pedido de café. Se você cancelar o pedido, esse é um evento de cancelamento separado e não altera o conteúdo do evento original.
- Observável: microsserviços podem assinar eventos com os quais se importam.
- Temporal: o tempo de um evento importa.

Criamos 4 Rules para emitir esses eventos e para podermos ter acesso as mensagens que cada um transmite

- **New Order**: Essa regra assina eventos do Validator e roteia o tráfego para o fluxo de trabalho do pedido.
- **WorkflowStarted**: Essa regra chama uma função Lambda que escreve as informações do pedido na tabela do DynamoDB.
- **WaitingCompletion**: Essa regra irá rotear esse evento para uma função Lambda que atualizará a tabela no DynamoDB.
- **logAll**: Para fins de depuração, pode ser útil registrar cada evento processado por um barramento de eventos personalizado. Essa é a função da regra catch-all que gera todos os eventos para o CloudWatch Logs.

### Configuring the frontends

Essa etapa foi basicamnte seguir os passos propostos e testar o App no final, como é algo mais relacionado aos Frontends,não temos muito oque discorrer aqui. Mas o App faz a verificação pra ser se o Usuário é válido, anota o pedido do cliente, e fica no App do barista a opção de cancelar, de colocar para produção e de finalizar o pedido.

Assim que o pedido é finalizado, aparece no App Display que o pedido ficou pronto e quanto tempo demorou. No App do Cliente é mostrado que o pedido está pronto e que é só retirar.

O QR Code troca de minutos em minutos e cada um deles suporta apenas 10 pedidos, aqui conseguimos observar certinho o nosso Workflow em andamento.

### Advanced

Essa seção mostra funções extras que podemos atribuir ao nosso Serverlesspresso para que tenhamos mais controle e registros.

##### BUSINESS METRICS WITH SQS AND DYNAMODB

Durante o fluxo de trabalho do pedido, a função Lambda WaitingCompletion emite um evento OrderManager.WaitingCompletion para o Event Bus enquanto o barista faz o pedido e usar esse evento para atualizar nossa tabela.
Com o uso dessas regras do EventBridge, você pode até estender a coleta de métricas para capturar eventos OrderManager e OrderCancelled para rastrear quantos pedidos são concluídos ou cancelados ao longo do tempo.

##### BUSINESS METRICS WITH SQS AND CLOUDWATCH

Neste módulo, é apresentada nova regra EventBridge para capturar todos os eventos OrderManager.WaitingCompletion e roteá-los para uma Fila SQS. Os eventos são processados ​​em lotes fora da fila por uma função Lambda que atualiza as métricas no Cloudwatch, onde podem ser visualizados usando um Painel do Cloudwatch.
