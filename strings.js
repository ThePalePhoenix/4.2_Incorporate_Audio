//Elias Kinard

//The intial "do" loop that will allow the user to check any number of palindromes until they decide to stop
do {

    //Calls the "checkPalindrome" function and passes in what the user types into the prompt
    checkPalindrome(prompt("Enter a string to see if it is a palindrome."));

    //After "checkPalindrome" finishes, we need to have a way to break the loop
    //This is that way; ask the user if they'd like to continue
    askConfirm = confirm("Would you like to check another string?");

    //This was a check initially used to make sure that "askConfirm" is changed to the right value.
    //console.log(askConfirm);

} while (askConfirm == true);
//The above "while" statement links to "askConfirm", leaving it up to the user to break the loop

//This is the magic function that ensures the entered string is a palindrome
function checkPalindrome(palindrome) {
    //First, we need to take in the value as a string.
    //Then it's split into individual characters, turning it into an array
    //Then that array is reversed
    //And finally it is joined together into a final string
    let pal = palindrome.split('').reverse().join('');

    //A check used to make sure that "pal" was properly manipulated.
    //console.log(pal);

    //The if-else that checks if the string's a palindrome.
    //If checks if the split-reverse-joined array is equal (case insensitive) to the initial string.
    if (pal.toLowerCase() == palindrome.toLowerCase()) {

        //If so, it will tell the user they have a palindrome.
        alert("It's a palindrome!");

    }
    
    else {

        //Otherwise, the statement wouldn't be a palindrome, and this alerts the user of that.
        alert("Not a palindrome!");

    }
}

//Because the form's "submit" would refresh the page, I had to add an event listener for that
document.getElementById("secretform").addEventListener("submit", function(evt) {
    
    //This prevents the page from refreshing...
    evt.preventDefault();

    //And *this* runs the checking function. Two birds with one stone in this case.
    secretCheck();
}, true);

//for the secret part of the website; does a few checks on the form values that are submitted.
function secretCheck () {

    //setting local variables for the different form box values
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var zip = document.getElementById("zip").value;
    //makes sure to have an integer version of "zip"
    var zipInt = parseInt(document.getElementById("zip").value);
    var fullname = fname + ' ' + lname;

    //console checks for the different values, to make sure the checks go through correctly.
    //console.log(fname);
    //console.log(lname);
    //console.log(zip);
    //console.log(fullname);
    //console.log(Number.isInteger(zipInt));

    //If the variable "fullname" is less than or equal to 20 characters (in other words, NOT greater than 20)...
    if (fullname.length <= 20) {

        //then check the zip code, to see if it is 5 digits (must be a number). If true...
        if (zip.length == 5 && Number.isInteger(zipInt) == true){

            //reveal the secret by changing its text value! It's always there, but there's nothing to do with it until then.
            document.getElementById('secret').innerHTML = "You found the secret! Click Me!"
        }
        //An else statement to break the function if there is something wrong
        else{
            return
        }
    }
    //And the same down here. If the data isn't valid, it will leave the function and the user will have to try again.
    else{
        return
    }
}