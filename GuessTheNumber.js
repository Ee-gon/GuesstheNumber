console.log("Hello!");

//the computer picks a random number
const randomNum = Math.floor(Math.random() * 100) +1;
console.log(`The random number is: ${randomNum}`);   //--------DEBUGGER

let guessesMade = 0; //Tracking number of guesses made (How many chances you took)
const maxGuesses = 5; // limit of gueses allowed to be made (The Max pretty much bro)

function handleGuess(event) {
    event.preventDefault(); //stops page from relaoding
    guessesMade++; //adds to guesses made when attempts taken

    console.log(`Guesses made: ${guessesMade}`);    //----------DEBUGGER

    const userGuess = parseInt(document.getElementById('userGuess').value, 10);
    const message = document.getElementById('guessTracker');
    const feedback = document.createElement('p');   //too high or too low message

    if(userGuess === randomNum){
        message.innerHTML = `<h3>H311 yeah boiiiiii you got it!!!</h3>`
        disableForm();
        return;
    } else if (userGuess > randomNum){
        feedback.textContent = "Too high, try again ya dweeb!";
    } else if (userGuess < randomNum) {
        feedback.textContent = "Too low, try again shorty.";
    }

    document.body.appendChild(feedback);

    if(guessesMade < maxGuesses){
        message.innerHTML = `You have made ${guessesMade} guesses out of ${maxGuesses} allowed in your attempt to complete this`;
    } else {       //This is what auto-updates the paragraph to let people know how many guesses they made
    
        alert(`You have reached the maximum number of guesses!`);
        //LOSER ^^
    }
}

function disableForm(){
    document.getElementById('submitButton').disabled = true;
    document.getElementById(`userGuess`).disabled = true;
}

