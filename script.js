const button =document.querySelectorAll(".button");

const input = document.querySelector(".input");

const back_button = document.querySelector(".back-button");


Array.from(button).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        switch(e.target.innerHTML){
            case "=":
                try{

                    input.value=eval(input.value);
                }
                catch(err){
                    input.value="Invalid Input!";
                }
                break;
            case "C":
                input.value = "";
                break;
            case "()":
               let str = input.value;
                if (str==""){
                    input.value += "(";
                }
                else if(str=="("){
                    input.value += ")";
                }
                else{
                    if ((str.split('(').length - str.split(')').length) > 0){
                    input.value += ")";
                }
                    else{
                    input.value+="(";
                }

                }
                break;
            default:
                input.value+=e.target.innerHTML;
                break;

        }
    })
});

back_button.addEventListener("click",()=>{
    input.value = input.value.substring(0,input.value.length -1);
})


