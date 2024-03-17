'use strict'

function renderGallery() {
        const imgs = getImgs()
        var strHTMLs = imgs.map(img => `
        <img src="${img.url}" onclick="onImgSelect(${img.id})">`
        )
        document.querySelector('.gallery-container').innerHTML = strHTMLs
}

function onImgSelect(id) {
        setImg(id)
        renderMeme()
}