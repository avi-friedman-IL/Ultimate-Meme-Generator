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
    document.querySelector('.meme-editor').classList.add('open')
    document.querySelector('.gallery-container').classList.remove('open')
    document.querySelector('.save').classList.remove('open')

    setImg(id)
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
        gCtx.strokeRect(0, 0, 0, 0)
    })
}

function downloadCanvas(elLink) {
    elLink.download = 'my-img'
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}

function onOpenSaveMeme() {
    document.querySelector('.save').classList.add('open')
    document.querySelector('.meme-editor').classList.remove('open')
    document.querySelector('.gallery-container').classList.remove('open')
    document.body.classList.remove('menu-open')
}

function onSaveMeme() {
    saveMeme(gElCanvas)
    const memes = loadFromStorage('memes')
    let strHTML = memes.map(meme => `<img src="${meme.url}" onclick="onImgSelect('${meme.id}')">`)
    
    document.querySelector('.save').innerHTML = strHTML
    document.querySelector('.msg').style.opacity = 1
    setTimeout(() => document.querySelector('.msg').style.opacity = 0,2000)

}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onMemeGallery() {
    document.querySelector('.gallery-container').classList.add('open')
    document.querySelector('.meme-editor').classList.remove('open')
    document.body.classList.remove('menu-open')
}

function onRandomizeCanvas() {
    randomizeCanvas()
    renderMeme()
    document.querySelector('.gallery-container').classList.remove('open')
    document.querySelector('.save').classList.remove('open')
    document.querySelector('.meme-editor').classList.add('open')
    document.body.classList.remove('menu-open')

}
