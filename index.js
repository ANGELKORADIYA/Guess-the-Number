let value;
let count=0;
const num = Math.floor(Math.random()*100);
// console.log(num);
let answer = document.getElementById("answer");
let guess = document.getElementById("guess");
let y = document.getElementById("x");
let submit = document.getElementById("submit");
let warn = document.getElementById("warn");
let hr=document.getElementsByClassName("hr")[0];
          
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    if(value!=num)
 {   count++;}  
 if(count==1){
    hr.innerHTML+=`<hr>`;
 }
    value = document.getElementById("guess").value;
    // console.log(value)  
    y.innerHTML=`COUNT : - ${count}`;
    if(value==num){
        answer.innerHTML=`<h1>Your Guess is Correct<br>You needed ${count} to guess correct</h1>`;
        submit.value= "Play Again";
        submit.classList.add("Next");
        // submit.addEventListener("click",location.reload())
    }
    else if(value<num){
        answer.innerHTML=`<h1>Try High</h1>`;
        
    }
    else if(value>num){
        answer.innerHTML=`<h1>Go down</h1>`;        
    }

    if(value<0||value>100){
        warn.innerHTML=`You Dumb ! Enter Value Between 1 to 100`;   
        
        warn.style.border="4px solid lightblue";
        setTimeout(() => {
            warn.style.border="none";
            warn.innerHTML="";
        }, 3000);
    }



    let x = document.querySelector(".Next")
    if(x){
    x.addEventListener("click",()=>{
        location.reload();
    })}
    guess.value="";
});
