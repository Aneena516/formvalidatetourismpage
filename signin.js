var email=document.getElementById("email");
var pwd=document.getElementById("pwd");
var regexp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})$/;
var reg=/[0-9]/;
var reg1=/[A-Z]/;
var reg2=/[a-z]/;
var reg3=/[?*@#^$&!%]/;
var error1=document.getElementById("error1");
var error2=document.getElementById("error2");

function main(){
 if(email.value==""||pwd.value==""){
     alert("fields not to be empty");
     return false;
 }else if(pwd.value.length<=6){
error2.innerHTML="less than 6 characters";
return false;
 }else  if(!reg.test(pwd.value)){
    error2.innerHTML="must contain atleast one number";
    error2.style.color="orange";
    return false;
 }else  if(!reg1.test(pwd.value)){
    error2.innerHTML="must contain atleast one uppercase";
    error2.style.color="orange";
    return false;
 }else  if(!reg2.test(pwd.value)){
    error2.innerHTML="must contain atleast one lowercase";
    error2.style.color="orange";
    return false;
 }else  if(!reg3.test(pwd.value)){
    error2.innerHTML="must contain atleast one special character";
    error2.style.color="orange";
    return false;
 }else if(reg.test(pwd.value)&&reg1.test(pwd.value)&&reg2.test(pwd.value)&&reg3.test(pwd.value)&&(pwd.value.length==8)){

    alert("poor password");
   
    return true;
}
   else if(reg.test(pwd.value)&&reg1.test(pwd.value)&&reg2.test(pwd.value)&&reg3.test(pwd.value)&&(pwd.value.length>12)){
       alert("strong password");
       
       return true;
   }else if(reg.test(pwd.value)&&reg1.test(pwd.value)&&reg2.test(pwd.value)&&reg3.test(pwd.value)&&(pwd.value.length<=12)){
    alert("medium password");
   
    return true;
   }
 else if(email.value==""){
     return false;
 }else{
           if(regexp.test(email.value)){
             error1.innerHTML="valid";
             error1.style.color="blue"; 
             return true; 
             
            }else{
                error1.innerHTML="Invalid";
                error1.style.color="red";
                return false;
            }
        } 
}
