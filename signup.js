var email=document.getElementById("inputEmail3");
var error=document.getElementById("error1");
var but1=document.getElementById("but1");
var password=document.getElementById("inputPassword3");
var text=document.getElementById("fullname");
var error2=document.getElementById("error2");
var error3=document.getElementById("error3");
var phno=document.getElementById("phno");
var error4=document.getElementById("error4");
var regexp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})$/;
var reg=/[0-9]/;
var reg1=/[A-Z]/;
var reg2=/[a-z]/;
var reg3=/[?*@#^$&!%]/;
var reg4=/^\d{10}$/;
var reg5=/^\([0-9]){3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;


function validate(){
   if(text.value==""||password.value==""||email.value==""||phno.value==""){
alert("fields not to be empty");
return false;
   }else if(password.value.length<8){
       error3.innerHTML="less than 8 characters";
     
       error3.style.color="orange";
       password.border="2px solid red";
       return false;
   }else if(password.value==text.value){
   error3.innerHTML="password be different from name";
   error3.style.color="orange";
   password.style.border="2px solid red";
return false;
   }


   else  if(!reg.test(password.value)){
    error3.innerHTML="must contain atleast one number";
    error3.style.color="orange";
    return false;
   }else  if(!reg1.test(password.value)){
    error3.innerHTML="must contain atleast one uppercase";
    error3.style.color="orange";
    return false;
   }else  if(!reg2.test(password.value)){
    error3.innerHTML="must contain atleast one lowercase";
    error3.style.color="orange";
    return false;
   }else  if(!reg3.test(password.value)){
    error3.innerHTML="must contain atleast one special character";
    error3.style.color="orange";
    return false;
   }else if(reg.test(password.value)&&reg1.test(password.value)&&reg2.test(password.value)&&reg3.test(password.value)&&(password.value.length==8)){

    alert("poor password");
   
    return true;
}
   else if(reg.test(password.value)&&reg1.test(password.value)&&reg2.test(password.value)&&reg3.test(password.value)&&(password.value.length>12)){
       alert("strong password");
       
       return true;
   }else if(reg.test(password.value)&&reg1.test(password.value)&&reg2.test(password.value)&&reg3.test(password.value)&&(password.value.length<=12)){
    alert("medium password");
   
    return true;
   }
else if(!reg4.test(phno.value)){
       error4.innerHTML="should contain 10 numbers";
       error4.style.color="orange";
       return false;
   }
 
   else if(email==""){
    return false;
}else {
   if(regexp.test(email.value)){
     error.innerHTML="valid";
     error.style.color="blue"; 
     password.style.border="2px solid red";
     return true; 
     
    }else{
        error.innerHTML="Invalid";
        error.style.color="red";
        return false;
    }
}
}


