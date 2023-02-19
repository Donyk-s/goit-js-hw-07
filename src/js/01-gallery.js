import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector('.gallery')
container.addEventListener('click', onPictureClick)

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

  function onPictureClick(Event) {
    Event.preventDefault();
    const isPictureItam = Event.target.classList.contains('gallery__image');
    if (!isPictureItam ) return;

    const currentUrl = Event.target.dataset.source;

    const instance = basicLightbox.create(
      `
		<img src="${currentUrl}" width="1280" height="auto"/>
        `,
      {
        onShow: (instance) => {
          window.addEventListener('keydown', onEscKeyPress);
        },
        onClose: (instance) => {
          window.removeEventListener('keydown', onEscKeyPress);
        },
      }
    );
    instance.show();

    function onEscKeyPress(e) {
      const ESC_KEY_CODE = 'Escape';
      const isEscKey = e.code === ESC_KEY_CODE;
      if (!isEscKey) return;
      instance.close();
    }
  }


