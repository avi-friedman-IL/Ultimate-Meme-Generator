'use strict'

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
}

function renderMeme() {
    renderCanvas()
}

function onImgSelect(id) {
    addAndRemoveClass()
    setImg(id)
    renderMeme()
}

function onRandomizeCanvas() {
    addAndRemoveClass()
    randomizeCanvas()
    renderMeme()
}

function onSetLineTxt(elValue) {
    setLineTxt(elValue)
    renderMeme()
}

function onUserColor(ev, elValue) {
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
}

function onSelectStickers(value) {
    onAddLine()
    selectStickers(value)
    renderMeme()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function addAndRemoveClass() {
    document.querySelector('.gallery-container').classList.remove('open')
    document.querySelector('.meme-editor').classList.add('open')
    document.body.classList.remove('menu-open')
}

function toggleClass() {
    document.querySelector('.gallery-container').classList.toggle('open')
    document.querySelector('.meme-editor').classList.toggle('open')
    document.body.classList.remove('menu-open')
}

