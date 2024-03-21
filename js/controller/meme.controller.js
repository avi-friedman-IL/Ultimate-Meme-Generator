'use strict'

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
}

function renderMeme() {
    renderCanvas()
}



function onSetLineTxt(elValue) {
    setLineTxt(elValue)
    renderMeme()
}

function onUserColor(ev, elValue) {
    console.log(ev);
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
function onTextLayout(layout) {
    textLayout(layout)
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

function onSelectFont(value) {
    console.log('hi');
    selectFont(value)
    renderMeme()
}

function onClearLine() {
    clearLine()
    renderMeme()
<<<<<<< HEAD
}

function onSelectStickers(value) {
    onAddLine()
    selectStickers(value)
    renderMeme()
=======
>>>>>>> bbdb2d2ecbbd2687636c5aab63de77cf3d984a75
}