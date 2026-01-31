var nameerror=document.getElementById('name-error');
var phoneerror=document.getElementById('phone-error');
var emailerror=document.getElementById('email-error');
var messe=document.getElementById('message-error');
var submiterror=document.getElementById('subit-error');
function validatename(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameerror.innerHTML='neme is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML='write full name';
        return false;
    }
    nameerror.innerHTML='valid';
    return true;
}


function validatephone(){
   var phone=document.getElementById('contact-phone').value;
   if(phone.length==0){
    phoneerror.innerHTML='phon no. is required';
    return false;

   }

   if(phone.length!=10){
    phoneerror.innerHTML='phone no. should be 10 digit';
    return false;
   }
   if(!phone.match(/^[0-9]{10}$/)){
    phoneerror.innerHTML='only digit are required';
    return false;
   }
   phoneerror.innerHTML='valid';
   return true;
   
}



function vali(){
    var email=document.getElementById('contact-email').value;
     if(email.length==0){
        emailerror.innerHTML=='email is required';
        return false;

     }
     if(!email.match(/^[A-Za-z]-[0-9]\._\*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
     emailerror.innerHTML='email invalid';
     return false;
     }
     emailerror.innerHTML='valid';
     return true;


}
function validatemessage(){
    var message=document.getElementById('contact-message');
    var required=30;
    var left=(required )-(message.length);

    if(left>=0){
        messe.innerHTML=left+'more character is required';
        return false;
    }
    messe.innerHTML='valid';
    return true;
}