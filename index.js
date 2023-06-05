var roll = document.querySelector('button')
var randomNumber1=Math.ceil(Math.random()*6);  //Math.floor(Math.random() * 6) + 1;
var randomimage1="dice"+randomNumber1+".png";
var randomsrc1="images/"+randomimage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsrc1);


var randomNumber2=Math.ceil(Math.random()*6);
var randomsrc2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsrc2);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}

roll.addEventListener('click', () =>{
    roll.classList.add('active')
    location.reload();
})

