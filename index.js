var myPic = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");

function choosePic() {
    var randomNumber1 = Math.floor(Math.random()*6);
    document.querySelector(".img1").src = myPic[randomNumber1];

    var randomNumber2 = Math.floor(Math.random()*6);
    document.querySelector(".img2").src = myPic[randomNumber2];
    document.querySelector("h1").style.fontSize = "6rem";

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "🚩Player 1 wins!";

    }else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").textContent = "Player 2 wins!🚩";
        
    }else{
        document.querySelector("h1").textContent = "Draw!🎉";
    }
}
choosePic();