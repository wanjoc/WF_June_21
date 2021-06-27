/*Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.*/

// while loop

var i=0;
var num=4;
while(true){
    console.log(num);
    num -= 1.5;
    if(num < -3.5){ //breaks the infinite while loop
        break;
    }
    i++;
}