import {showLoader} from '../main'
export default function getImages(image) {
    const BASE_URL = 'https://pixabay.com/api/'
    const params = new URLSearchParams({
        key: '43041938-51a06b63921488a862c0fcc6d',
        q: image,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    })
    const url = `${BASE_URL}?${params}`
    showLoader()
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}
    
