const imageContainer=document.getElementById('image-container');
const loader=document.getElementById('loader');

let ready=false;
let imagesLoaded=0;
let totalImages=0;

let photosArray=[];

const count=30;
const apiKey='mw1XjlzOIBkei0W-8w2HwOYaoLbzBeGb9aeIxwckvd4';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded===totalImages){
        loader=true;
        ready=true;
        console.log('ready=',ready)
    }
}


// Create elements for links, Photos and add to DOM
function displayPhotos(){
    imagesLoaded=0;
    totalImages=photosArray.length;
    photosArray.forEach((photo)=>{
        // Create an anchor element to link to unsplash
        const item=document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank')

        // Create <img> for photo
        const img= document.createElement('img')
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description)

        img.addEventListener('load',imageLoaded)

        // Put image inside anchor tag then put both inside image container element
        item.appendChild(img)
        imageContainer.appendChild(item)
    });
}

// get photos from unsplash api
async function getPhotos(){
    try{
        const response=await fetch(apiUrl);
        photosArray=await response.json();
        // console.log(photosArray);
        displayPhotos();
    }
    catch(error){
        getPhotos();
    }
}

// Check to see if scrolling near bottom of page ,Load more photos
window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY>=document.body.offsetHeight - 1000){
        getPhotos();
    }
});


// On load
getPhotos();