'use strict'

function renderGallery() {
        const imgs = getImgs()
        let strHTMLs = imgs.map(img => `
        <img src="${img.url}" onclick="onImgSelect(${img.id})">`
        )
        document.querySelector('.gallery-container').innerHTML = strHTMLs
}

function onImgSelect(id) {
        toggleToOpenClass()
        setImg(id)
        renderMeme()
}

function toggleToOpenClass() {
        document.querySelector('.gallery-container').classList.toggle('open')
        document.querySelector('.meme-editor').classList.toggle('open')
        document.body.classList.remove('menu-open')
}