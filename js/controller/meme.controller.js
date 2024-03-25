'use strict'

let gElCanvas
let gCtx

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

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

function renderCanvas() {
    addListeners()
    const { selectedImgId } = getMeme()

    const imgToEdit = getImg()
    const img = new Image()
    img.src = selectedImgId === 'user' ? gUrl : imgToEdit.url

    img.onload = () => {
        gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText()
    }
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function drawText() {

    const { lines } = getMeme()

    lines.forEach(line => {
        if (line.isDelete) line.txt = ''

        gCtx.textAlign = line.align
        gCtx.font = `${line.size}px ${line.fontFamily}`

        gCtx.fillStyle = line.color
        gCtx.fillText(line.txt, line.x, line.y)

        if (line.isMark) gCtx.strokeRect(line.x, line.y - line.size, line.x + 100, line.size * 1.5)

        gCtx.fillStyle = 'white'
        line.isDelete = false
    })
}

function downloadCanvas(elLink) {
    gCtx.strokeRect(0, 0, 0, 0)
    elLink.download = 'my-img'
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
    // renderCanvas()
}
