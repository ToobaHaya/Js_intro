// TASK:1
var zakat_person=0.025
var user_asset= +prompt ("asset_value")
var result= zakat_person * user_asset
alert("your zakat=" = result)

// TASK:2

var familyMembers = +prompt("Enter your family members")
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
