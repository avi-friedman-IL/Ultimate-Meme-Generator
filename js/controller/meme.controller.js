'use strict'

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
}

function renderMeme() {
    renderCanvas()
}



function onSetLineTxt(el) {
    setLineTxt(el)
    renderMeme()
}

function onUserColor(elValue) {
    setColor(elValue)
    renderMeme()
}

function onTextSizeIncrease() {
    textSizeIncrease()
    renderMeme()
}
function onTextSizeDecrease() {
    textSizeDecrease()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()    
}

function onSwitchLine() {
    switchLine()
    renderMeme()
}

function onMouseDown(ev) {
    mouseDown(ev)
    renderMeme()
}