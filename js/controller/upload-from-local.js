'use strict'

let gUrl 

function onImgInput(ev) {
    loadImageFromInput(ev)
}

// Read the file from the input
// When done send the image to the callback function

function loadImageFromInput(ev) {
    gMeme.selectedImgId = 'user'
    const reader = new FileReader()
    reader.onload = ev => {
        let img = new Image()
        img.src = ev.target.result
        gUrl = img.src
        img.onload = () => renderImg(img)
        // drawText()
    }
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    // Adjust the canvas to the new image size
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width

    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    document.querySelector('.meme-editor').classList.add('open')
    document.querySelector('.gallery').classList.remove('open')
    document.querySelector('.save').classList.remove('open')
}