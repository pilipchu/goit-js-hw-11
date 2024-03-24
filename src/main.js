import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import getImages from './js/pixabay-api';
import makeGallery from "./js/render-functions";


const formEl = document.querySelector('form')


formEl.addEventListener('submit', event => {
    event.preventDefault()
    let image = event.target.elements.images.value.trim()
    if (image === '') {
        iziToast.info({
            message: "Line is empty, enter a value",
            position: "topLeft"
        })
        makeGallery([])
        return 
    }
    getImages(image).then(data => {
        const arr = data.hits
        if (arr.length <= 0) {
            iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight",
            })
            makeGallery([])
        } else {
            makeGallery(arr)
            lightbox.refresh()
        }
    }
    )
    formEl.reset()
})

var lightbox = new SimpleLightbox('.gallery-link', { 
    captionsData: 'alt',
  captionDelay: 250,
    overlayOpacity: 0.8,
 })

