//=====================Easy Challenges on Edabit========================

/*
//Return the Sum of two numbers.

function Sum(one, two){
    return one + two;
}
Sum(5,5);
*/
//==============================================================
/*
//Return the first element in an array

var numbers = [1500,2,3,4,5,6,7,8,9];
var otherNum = [2000, 45, 34, 24];
function first(num){
    for(var i = 0; i < num.length; i++){
        if(num[i] === num[0]){
            console.log(num[i]);
        }
    }
}
first(numbers);
first(otherNum);
*/
//==============================================================

//Write a function that takes in a Base and Height and returns the
//area of a triangle.
/*
function triangle(base, height){
    return (base * height)/2;
}
triangle(20,20);
*/
//===============================================================

//Write a function that converts hours to seconds.
/*
function timeConvert(hour){
    return (hour * 60) * 60;
}
timeConvert(5);
*/
//===============================================================

//Write a function that returns the next Integer
/*
function nextInt(next){
    return next + 1;
}
nextInt(-5);
*/
//===============================================================

//Write a function that returns the Maximum edge of a triangle

/*
function nextEdge(sideOne,sideTwo){
    return (sideOne + sideTwo) - 1;
}
nextEdge(5,10);
*/
//===============================================================

//Write a function that returns the remainder of two numbers
/*
function remainder(one, two){
    return (one % two);
}
remainder(15, 4);
 */
//===============================================================

//Write a function that determines if a number is less than zero
/*
function ifZero(x){
    if (x <= 0){
        return true;
    }else{
        return false;
    }
}
ifZero(-12);

 */
//================================================================

//Write a function that returns the total number of legs on the farm
/*
function animalsLegs(one, two, three){
    var chicken= 2;
    var cow = 4;
    var pig = 4;
    return ((one * chicken) + (two * cow) + (three * pig));
}
animalsLegs(1,2,3);
*/

//================================================================

//Write a function that returns true if prob * prize > pay
/*
function ifWorthIt(prob, prize, pay){
    if ((prob * prize) > pay){
        return true;
    }else if((prob * prize) < pay){
        return false;
    }else{
        console.log("What game is this?");
    }
}
ifWorthIt(20,100, 50);
*/
//================================================================

//Write a function that returns Multiples of 100

/*
function multiples(divisor){
    if (divisor % 100 === 0){
        return "This number is divisible by 100"
    }else{
        return "try again"
    }
}
multiples(1000);
*/
//=================================================================