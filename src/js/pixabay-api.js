import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
 
function getImages(image) {
        const BASE_URL = 'https://pixabay.com/api/'
    const params = new URLSearchParams({
        key: '43041938-51a06b63921488a862c0fcc6d',
        q: image,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    })
    const url = `${BASE_URL}?${params}`
    return fetch(url)
        .then(res => {
           return res.json()
        })
        .catch(err => console.log(err))
    }
    
export default getImages