const generateForm=document.querySelector(".generate-form");
const imageGallery=document.querySelector(".image-gallery");
const OPENAI_API_KEY="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";
const generateAiImages=async (userPrompt,userImgQuantity) =>{
 try{
    const response=await fetch("https://api.openai.com/v1/image/generations",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":'Bearer ${OPENAI_API_KEY}'
        },
        body: JSON.stringify({
            prompt:userPrompt,
            n:userImgQuantity,
            size:"512x512",
            response_format:"b64_json"
        })
    });


 }catch(error){
    console.log(error);

 }
}



const handleformsubmission=(e)=>{
    e.preventDefault();
    const userPrompt=e.srcElement[0].value;
    const userImgQuantity=e.srcElement[1].value;

   //nhjjnnmkm
    const imgCardMarkup=Array.from({length: userImgQuantity}, () =>
        '<div class="img-card loading"><img src="loader.svg" alt="image"><a href="#" class="download-btn"><img src="download.svg" alt="dowload icon"</a></div>'
).join(" ");

  imageGallery.innerHTML=imgCardMarkup;
  generateAiImages(userPrompt,userImgQuantity);


}
generateform.addEventListener("submit",handleformsubmission);
