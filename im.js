
const accessKey='2KPPtdZWYxKu0oB1PlER7sJNO4khq4Lm0ItzM8NEYoI';
const searchInput=document.querySelector('.search-input');
const searchForm=document.querySelector('form');
const imagesContainer=document.querySelector('images-container');
//unsplash api.....
const fetchImages= async (query)=>{
    imagesContainer.innerHTML='';
    const url=`https://api.unsplash.com/search/photos?query=${query}&per_page=28&clint_id=${accessKey}`;
    const response=fetch(url);
    const data=await response.json();
    data.results.forEach(photo=>{
        const imageElement=document.createElement('div');
        imageElement.classList.add('imageDiv');
        imageElement.innerHTML=`<img src="${photo.urls.regular}
        "/>`;
        const overlayElement=document.createElement('div');
        overlayElement.classList.add('overlay');
        const overlayText=document.createElement('h3');
        overlayText.innerHTML



        imageElement.appendChild(overlayElement);
        imagesContainer.appendChild(imageElement);
    });
}
searchForm.addEvenListner('submit',(e)=>{
    e.preventDefault();
const inputText=searchInput.ariaValueMax.trim();
if(inputText!==''){
    fetchImages(inputText);

}
else{
    imagesContainer.innerHTML=`<h2>please enter a search query.</h2>`
}
});