import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryWrapper = document.querySelector('.gallery')


const createPicture = galleryItems.map((item) => 
    `<a class="gallery__item" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source=“${item.original}”
    alt="${item.description}" 
    />
    </a>`
).join(``)
    
galleryWrapper.insertAdjacentHTML("afterbegin", createPicture)
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }); 

