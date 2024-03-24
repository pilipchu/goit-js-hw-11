import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import getImages from './js/pixabay-api';
import makeGallery from "./js/render-functions";


const formEl = document.querySelector('form')
const loadItem = document.querySelector('.loader-cont')
export const list = document.querySelector('.gallery-image')


loadItem.style.display = 'none';

export const showLoader = () => {
    loadItem.style.display = 'flex';
};

const hideLoader = () => {
    loadItem.style.display = 'none';
};


formEl.addEventListener('submit', event => {
    event.preventDefault()
    const image = event.target.elements.search.value.trim()

    if (image !== '') {
        getImages(image).then(data => {
            makeGallery(data.hits)
            hideLoader()
        })
        formEl.reset()
    } else {
        list.innerHTML = ''
        iziToast.info({
        message: "Line is empty, enter a value",
        position: "topLeft"
    })
    }
})
   


export const lightbox = new SimpleLightbox('.gallery-link', { 
    captionsData: 'alt',
  captionDelay: 250,
    overlayOpacity: 0.8,
 })

