// TASK:1

// var zakatPercentage = "0.025"
//  var userInput = prompt("user asset") 
//  var result = ("Your Zakat amount is " +userInput * zakatPercentage)
//  alert(result)

// TASK:2

var familyMembers =  prompt("Enter your family members")
var method = prompt( "Fitah method?" )
var Wheat=250;
var Barley=450;
var Raisins=2800;
var Dates=2100;
var result;
if(method== Wheat)
  result= Wheat * familyMembers
else if(method== Barley)
   result= Barley * familyMembers
else if(method== Raisins)
   result=Raisins * familyMembers
else if(method== Dates)
   result=Dates * familyMembers
  else{
    alert("Typing Mistake");
  } 
alert( "Your Fitrah amount=" = result )       


// // TASK-3
// var secretNumber= +prompt ("Enter a number from 1 to 10" )
// if(secretNumber==8)
//   alert("Congratulations!");
// else if(secretNumber>8)
//   alert ("number is too high") 
// else if(secretNumber<8)
//   alert("Number is too low")
//   else{
//     alert("Unknown operator");
//   }    



var familyMembers = +prompt("enter your family members", "enter ur family members");
var fitranaMethod = prompt("choose fitrana method\n (a).wheat= Rs 250 \n (b). dates= Rs 2100\n  (c).Balary=Rs450\n (d).raisins ")

var Wheat = 250 * familyMembers;
var Dates = 2100 * familyMembers;
var Barley = 450 * familyMembers;
var Rasins = 2800 * familyMembers;





if (fitranaMethod == "wheat") {
    alert("The total fitrah amount of your family is: " + Wheat);
}



var dates = 2100;
if (fitranaMethod == "dates") {
    alert("The total fitrah amount of your family is: " + dates);
}
var Balary = 450;
if (fitranaMethod == "Balary") {
    alert("The total fitrah amount of your family is: " + Balary);
}
var raisins = 1800;
if (fitranaMethod == "raisins") {
    alert("The total fitrah amount of your family is: " + raisins);
}

var zakatPercentage = "0.025"
 var userInput = prompt("user asset") 
 var result = ("Your Zakat amount is " +userInput * zakatPercentage)
 alert(result)


4