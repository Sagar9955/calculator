let options=document.querySelectorAll(".operation");
let display=document.querySelector(".display");
let equal=document.querySelector("#equals");
let clear=document.querySelector("#C");

options.forEach((option)=>{
    option.addEventListener("click",(e)=>{
        let value=e.target.id;
        display.value+=value;
    })
})


equal.addEventListener("click",(e)=>{
        if(display.value===""){
            display.value="";
        }else{
            let answer=eval(display.value);
            display.value=answer;
        }
    })

clear.addEventListener("click",(e)=>{
    display.value="";
})