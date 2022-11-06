let twitter=document.querySelector("#twit")//twitter icon getting value
let buttaud=document.querySelector(".audio_1")//audio button getting value
//console.log(buttaud);
let textqu=document.getElementById("oriQuote");// getting value of paragraph content 
let authname=document.getElementById("authername")//getting value of auther name

function quotefun(){
   //fetching ramdom url
fetch("https://quotable.io/random?maxLength=100").then((res)=>res.json()).then((result)=>{console.log(result)
textqu.innerText=result.content;//change random paragraph content
authname.innerText=result.author});//change random auther name

}
buttaud.addEventListener("click",()=>{
    //functioning for audio button
    let utterance=new SpeechSynthesisUtterance(`${textqu.innerText} by ${authname.innerText}`);
speechSynthesis.speak(utterance);
})
twitter.addEventListener("click",()=>{
    //functioning for twitter button
    let twittUrl=`http://twitter.com/intent/tweet?url=${textqu.innerText}`;
window.open(twittUrl, "_blank")
})
