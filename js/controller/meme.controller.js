'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
}

function renderMeme() {
    const meme = getMeme()
    const imgToEdit = getImg()
     
    const img = new Image()
    img.src = imgToEdit.url
   
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines.txt, gElCanvas.width / 2, gElCanvas.height / 5)
    }

}



function onSetLineTxt(el) {
    setLineTxt(el)
    renderMeme()
}