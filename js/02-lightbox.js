import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const newGallery = createNewGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', newGallery);

function createNewGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
             <a class="gallery__item" href="${original}">
             <img class="gallery__image"
             src="${preview}"
             alt="${description}"/>
            </a>
            `;
        })
        .join("");
}

galleryRef.addEventListener('click', onGalleryRefClick);

function onGalleryRefClick(event) {
    event.preventDefault();

    const isGalleryRef = event.target.classList.contains('gallery__image');
    if (!isGalleryRef) {
        return;

    }
};

    // console.log(isGalleryRef);

    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    gallery.on('show.simplelightbox');

    const modalWindow = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
    modalWindow.show();


    galleryRef.addEventListener('keydown', onEscapePress);


    function onEscapePress(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
            modalWindow.close();
        }
    }
    modalWindow.show();
  
