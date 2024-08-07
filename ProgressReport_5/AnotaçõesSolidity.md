# Anotações acerca de SmartContracts, Solidity, dentre outras tecnologias

## SmartContract, o que são e para que serve?

Um **Smart Contract** é basicamente um contrato autoexecutável,seus termos são escritos em linhas de código. Ele permite eé geralmente usado na execução confiável de transações e acordos sem a necessidade de existir os intermediários nesse acordo.

Um dos pontos positivos e interessantes dos Smart Contracts é a questão de ser implementado e não precisar mais de alguém por conta, após essa implementação eles funcionam automaticamente, apesar de não poder ser alterado, isso ocorre para que não tenha mudanças nos termos do contrato.

Funcionam em redes Blockchain, sem uma entidade controladora e as transações são visíveis por qualquer participante da rede, logo, um procedimento com bastante transparência.

O funcionamento desses contratos são bem simples, por meio de linhas de códigos você define os termos necessários, e após isso é realizada a implementação em uma blockchain. Quando as condições são atendidas, o contrato acaba sendo executado automaticamente e é realizada a verificação dessas transações.

## Solidity

O **Solidiy** é uma linguagem de programação destinada ao desenvolvimento de smart contracts que são executados na máquina virtual Ethereum (EVM). É uma linguagem com inspirações em diversas outras lnguagens comopor exemplo JavaScript, Python e C++.

É uma linguagem de tipagem estática, a variáveis precisam ter seus tipos difinidoss, destinada a criação de contratos inteligentes que executam transações, pode se utilizar de programação orientada a objetos, heranças e polimorfismo. Nessa linguagem também temos como componentes básicos as funções, os eventos, modifiers e contratos.

Nessa mesma pasta, conseguimos ver no arquivo `Exemplo_1.sol` um exemplo de código.

Outras linguagens também utilizadas para desenvolvimento de contratos inteligentes são as seguintes: **Vyper, Chaincode (Hyperledger Fabric), Michelson, Zilliqa, Plutus, DAML (Digital Asset Modeling Language), Move, Bamboo, dentre outras.**

### Tipos de váriaveis disponiveis no Solidity

Segue abaixo os tipos de variáveis que temos na linguagem Solidity:

- **bool:** True ou False
- **int:** Inteiros com sinal (positivos ou negativos). Podendo variar de tamanho sendo do `int8` até o `int256`.
- **uint:** Inteiros somente positivos. Podendo variar de tamanho sendo do `int8` até o `int256`.
- **address:** Representa um endereço Ethereum (20 bytes). Exemplo: `0x1234567890123456789012345678901234567890`.
- **bytes1 a bytes32:** Representa uma sequência de bytes com tamanho fixo.
- **bytes:** Representa uma sequência de bytes com tamanho variável.
- **string:** Sequência de caracteres de tamanho variável.
- **array:** Estrutura que armazena uma coleção de elementos do mesmo tipo.
- **struct:** Define um novo tipo que agrupa diferentes variáveis.
- **mapping:** Estrutura de dados semelhante a uma tabela de hash.

## Gas fee

O Gas é a unidade de medida usada para realizar o cálculo da quantidade de trabalho computacional que vai ser necessário para executar certos contratos e transações na rede Ethereum. Cada operação em Solidity, consome uma certa quantidade de gas.

É chamado de Gas Price o preço que um usuário está disposto a pagar por unidade de gas, geralmente esse valor é dado em Gwei (1 Gwei = 10^(-9) Ether). E Gas Limit é outro termo que ilustra a quantidade máxima de fas que o usuário pretende gastar.

O papel desse Gas Fee é incentivar os Mineradores/Validadores, que recebem como se fosse uma recompensa pelo processamento e validação das transações. Prevenir Spam, pois como cada operação custa um pequeno valor, isso faz com que a ferramente seja utilizada com sabedoria e eficiência.

## Web-3

Web3 é um termo usado para descrever a próxima geração da internet, que possui as seguintes características:

- **Descentralização:** Controle distribuído entre os usuários da rede.
- **Blockchain:** Transações seguras e transparentes.
- **Criptomoedas:** Facilitar transações.
- **Smart Contract:** Contratos autoexecutáveis, escritos em código e executados na blockchain.

## ABI Array

O ABI Array é um componente disponível nos contratos inteligentes. Ele serve como uma interface que define como um contrato inteligente pode interagir, especificando diversas características do contrato.

No arquivo `Exemplo_2.json` temos um exemplo de ABI Array que foi utilizado no curso que vimos na Udemy.

Aqui, usamos essa ferramenta para interagir com os cosntratos que criamos e gerar algumas transações.

## Tokens ERC

Tokens ERC são criados na blockchain Ethereum. Esses padrões definem regras e interfaces que os tokens devem seguir para garantir o bom funcionamento entre os diferentes contratos e aplicativos dentro do ecossistema Ethereum. Segue abaixo os tokens que vimos durante esse curso:

- **ERC-20:** É o padrão mais comum. Ele é um token fungível, eles são intercambiáveis, ou seja, cada unidade de token é igual a outra (como se fossem moedas mesmo). Exemplo no rquivo `Exemplo_ERC20.sol`.
- **ERC-721:** É um padrão não fungíveis, que são únicos e não intercambiáveis. Cada token ERC-721 é diferente dos outros tokens, são únicos. Geralmente utilizado como colecionáveis digitais, arte digital, e jogos.
- **ERC-1155:** Esse é o padrão que permite a criação de contratos inteligentes que podem gerenciar tanto tokens fungíveis quanto não fungíveis, e acaba sendo necessário e utilizado em jogos e mercados digitais.
- **ERC-4337:** Se trata de padrão emergente na blockchain Ethereum que introduz um novo conceito. Ele se destina a melhorar a experiência do usuário e a funcionalidade de contratos inteligentes. Pelo que eu entendi ele permite que diferentes tipos de conts funcionem de forma mais flexível e segura, facilitando o uso da tecnologia.

Acebei tento muitos erros com o openzeppelin e não consegui deixar os exemplos dos contratos salvos aqui no repositório, mas nos [LAB] do curso disponibilizado temos diversos exemplos mostrando cada um dos tokens.

### \*openzeppelin

OpenZeppelin é uma biblioteca de contratos inteligentes desenvolvida para facilitar a criação de aplicações descentralizadas (dApps) seguras na blockchain Ethereum. Durante o curso visto foi utilizdo diversas vezes para desenvolver contratos.

## Truffle

Truffle é um framework que utilizamos no desenvolvimento de alguns Contratos, utilizamos para realizar testes e implantações. Ele oferece uma série de ferramentas integradas que ajudam o desenvolvimento e gerenciamento de projetos de blockchain.

Ele ajuda no gerenciamento dos contratos, automatiza as compilações, tem um ambiente interatico, facilita realizar os testes, tem uma blockchain de dev local, dentre diversas outras ferramentas que facilita esse papel do desenvolvedor.

## Ganache

Eu entendi que Ganache é um outro tipo de ferramenta, parecida com o Truffle, só que com alguns diferenciais, essa ferramenta é mais focada em fornecer uma blockchain local que o Truffle usa para compilar, implantar e testar os contratos. Acho que o Ganache fornece o ambiente e o truffle atua nele. Fazendo assim um belo conjunto de desenvolvimento completo para contratos inteligentes e dApps na Ethereum.

## RedHat

Vimos também o Red Hat que é uma empresa global conhecida por sua distribuição de software de código aberto e soluções empresariais baseadas em Linux. Ela contrinui para o sistema de blockchain por meio da OpenShift e suas contribuições para projetos como Hyperledger.

Durante o curso não tivemos uma aprofundação nesse tema, apenas utilizamos as ferramentas disponíveis para fazer alguns testes e implantação.

## Metamask

O metamask é uma carteira digital que utilizamos para simular transferências e opreçãoes na rede blockchain, com ela podemos armazenar, gerenciar e transacionar criptomoedas e tokens (de testes ou reais).

Utilizamos o Metamask, que é uma das mais populares no ecossistema Ethereum. Ele é basicamente uma extensão de navegador, que gerencia contas e identidades, suporta diversos tokens (ERC-20, ERC-721, dentre outros) e criptomoedas.

Oferece uma boa segurança, oferecendo controle total das chaves privadas, funcionalidades de proteção e uma interface que achei bem intuitiva ao utilizar.
