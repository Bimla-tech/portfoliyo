const selecttag=document.querySelectorAll("select");
selecttag.forEach(tag=>{
    for(const conty_code in countries){
       
         console.log(countries[conty_code]);
        let option ='<option value="${conty_code}">${countries[conty_code]}</option>';
        tag.insertAdjacentHTML("beforend",option);
        }
    
});