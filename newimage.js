const accessKey="Fxswx_rXsJRzFT5L3Gquvo5pkhTSm0fWr4Gl8DUIZpg";
const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const searchBtn=document.getElementById("show-more-btn");
 let keyword="";
 let page=1;
 async function searchImges(){
    keyword=searchBox.value;
    const url='https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';
    
    const response=await fetch(url);
    const data=await response.json();
results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
})

 }
 searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImges();
 });