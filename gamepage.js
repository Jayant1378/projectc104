var x = document.getElementById("guessField").value;

var y = Math.floor(Math.random() * 10 + 1);

function submit()
{
if (x == y) {
    alert("CONGRATUATIONS!!!"+playername+"  YOU GUESSED IT RIGHT IN "
    + guess + "GUESS");
} else if(x > y) 
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
}
function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}