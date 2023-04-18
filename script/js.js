// TASK:1

//Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx"

// var zakatPercentage = "0.025"
//  var userInput = prompt("user asset") 
//  var result = ("Your Zakat amount is " +userInput * zakatPercentage)
//  alert(result)

// TASK:2

// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

// var familyMembers = +prompt("Write down your Total Family Members");
// var fitrahMethod = prompt("Choose your Fitrah Method: \na) Wheat \nb) Barley \nc) Dates \nd) Raisins");
// var wheat = 250; 
// var barley = 450;
// var dates = 2100;
// var raisins = 2800;
// fitrahMethod = fitrahMethod.toLowerCase()


// if(fitrahMethod == "wheat"){
//     var result = wheat * familyMembers
    
// }
// else if(fitrahMethod == "barley"){
//     var result = barley * familyMembers
    
// }
// else if(fitrahMethod == "dates"){
//     var result = dates*  familyMembers
    
// }
// else if(fitrahMethod == "raisins"){
//     var result = raisins * familyMembers
    
// }
//   else{
//     alert("unknown")
//   }
// alert("Your Total Fitrah Amount is " +result)


// // TASK-3

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

// var secretNumber = 7;

//     var guess = +prompt("Guess A Secret Number between 1-10");

   
// if(guess == 7){
//     alert("Congratulations! You guessed the secret number")
// }

// else if(guess <7){
//     alert("Oops! Your guess is too low \n Try Again")
// }


// else if(guess > 7){
//     alert("Your guess is too high. \n Try Again")
// }


// Task:4

// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).


// var userName = prompt("Enter Your Name")
// var upperCase = userName.slice(0,1).toUpperCase();
// var lowerCase = userName.slice(1).toLowerCase();
// var fullname = upperCase + lowerCase;
// alert(fullname)

// Task 5:

// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

// var contactNames = []
// var contactNumber = []
// for (let i = 0; i <= 2; i++) {
//     contactNames[i] = prompt("Enter Name")
//     contactNumber[i] = prompt("Enter Number")
//     contactNames.push(name)
//     contactNumber.push(Number)

// }

// for (let i = 0; i <= 2; i++) {
//     console.log(contactNames[i] + "  " + "  " + contactNumber[i])
// } 


// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.


// var product=['pizza', 'burger','fries','roll','Lays']
// var userinput = +prompt("please enter the position of product which you remove: \n 0)pizza , 1)burger , 2)fries , 3)roll , 4)Lays ")
// var a =product.splice(userinput,1)
// console.log( "remaining items:"+product)
// remainingitems=(a)
// console.log("remove items="+remainingitems )

// Task 7:

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.



// var nationality = prompt("Enter Your Nationality")
// if (nationality == "pakistani" || nationality == "Pakistani" || nationality == "Indian" || nationality == "indian") {
      
//    var gender = prompt("Enter Gender")
//    var age = +prompt("Enter Age")
//     if (gender == "male" || gender == "Male") {
//         if (age >= 18) {
//             alert("You Are Eligible For Vote")
//         } else {
//             alert("You Are Not Eligible For Vote")
//         }
//     }
//     if (gender == "female" || gender == "Female") {
//         if (age >= 18) {
//             var status = prompt("You Are Married Or Not?")
//             if (Status == "Married" || Status == "married") {
//                 alert("You Are Eligible For Vote")
//             } else {
//                 alert("You Are Not Eligible For Vote")
//             }
//         } else {
//             alert("You Are Not Eligible For Vote")
//         }
//     }
//   }
//  else {
//     alert("You Are Not Eligible For Vote")

// }

// Task:8

// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.

// var cricketplayer=['Babar Azam','Shadab Khan', 'Asif Ali', 'Fakhar Zaman',' Haider Ali', 'Haris Rauf', 'Iftikhar Ahmed', 'Khushdil Shah', 'Mohammad Hasnain',' Mohammad Nawaz', 'Mohammad Rizwan', 'Mohammad Wasim',' Naseem Shah','Shaheen Shah Afridi',' Shan Masood']
// console.log(" Name of Pakistani Teams Player selected for WorldCup: \n " + cricketplayer)
// var  selectedplayer= cricketplayer.slice(0,11)
// console.log ("final team players: \n"+selectedplayer )

