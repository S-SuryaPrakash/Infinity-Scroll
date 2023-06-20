const imagContainer=document.getElementById('image-container');
const loader=document.getElementById('loader');

let photosArray=[];

const count=10;
const apiKey='mw1XjlzOIBkei0W-8w2HwOYaoLbzBeGb9aeIxwckvd4';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for links, Photos and add to DOM
function displayPhotos(){
    photosArray.forEach((photo)=>{
        // Create an anchor element to link to unsplash
        const item=document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank')

        // Create <img> for photo
        const img= document.createElement('img')
        img.setAttribute('src',photos.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description)

        // Put image inside anchor tag then put both inside image container element
        item.appendChild(img)
        imagContainer.appendChild(item)
    });
}

// get photos from unsplash api
async function getPhotos(){
    try{
        const response=await fetch(apiUrl);
        photosArray=await response.json();
        displayPhotos();
    }
    catch(error){

    }
}