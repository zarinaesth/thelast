let letter=0;
const text="Do it! Improve your skills!";

function typeText(){
    if(letter<text.length){
        document.getElementById("type-js").innerHTML +=text.charAt(letter);
        letter++;
        let speed=Math.floor(Math.random()*150)+50;
        setTimeout(typeText,speed);
    }
}
typeText();


