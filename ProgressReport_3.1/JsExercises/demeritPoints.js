console.log(checkSpeed(130));

function checkSpeed(speed){
    if(speed <= 74){
        return 'Ok';
    }
    else{
        aux = speed - 74;
        points = Math.ceil(aux / 5);

        if(points > 12){
            return 'Suspended';
        }
        else{
            return "Points: " + points;
        }
    }
}