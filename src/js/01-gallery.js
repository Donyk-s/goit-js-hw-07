import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector('.gallery')


    const markup = galleryItems.map(({preview, original, description}) => 
        
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src = "${preview}"
      data-source="${original}"
      alt="${description}"  
    />
  </a>
</div>
`
    ).join('')
  container.insertAdjacentHTML('beforeend', markup)


function onPictureCreateModal = (Event) => {
    if (Event.target.classlist.value !== 'gallery__image')
        return
}
// Event.target.parentNode.Propagation()
// basiclightbox.create(`<img src="${Event.target.dataset.soursce}>`).show();
// container.addEventListener('click', onClickElement)
// container.insertAdjacentHTML('beforeend', createGalleryMarcup())
