import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {list, lightbox} from '../main'


export default function makeGallery(arr) {
    if (arr.length == 0) {
        list.innerHTML = ''
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight",
        })
    } else {
        const gallery =  arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    </a>
    <div class="content-image">
    <p class="pege-item">Likes<span class="inf-item">${likes}</span></p>
    <p class="pege-item">Views<span class="inf-item">${views}</span></p>
    <p class="pege-item">Comments<span class="inf-item">${comments}</span></p>
    <p class="pege-item">Downloads<span class="inf-item">${downloads}</span></p>
    </div>
    </li>`).join("")
        list.innerHTML = gallery
        lightbox.refresh();
    }
}