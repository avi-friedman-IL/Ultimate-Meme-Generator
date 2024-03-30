'use strict'

function renderGallery() {

        const imgs = gImgsFiltered ? getFiltered() : getImgs()
        let strHTMLs = imgs.map(img =>
                `<img src="${img.url}" onclick="onImgSelect('${img.id}')">`
        )
        document.querySelector('.gallery-container').innerHTML = strHTMLs
}


