'use strict'

let gElCanvas
let gCtx

function renderCanvas() {

    const meme = getMeme()
    const imgToEdit = getImg()

    const img = new Image()
    img.src = imgToEdit.url

    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.fillStyle = meme.lines.color
        gCtx.font = `${meme.lines.size}px Arial`
        

        drawText(meme.lines.txt, gElCanvas.width / 2, gElCanvas.height / 5)

    }
}


function drawText(text, x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'


    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function downloadCanvas(elLink) {
    elLink.download = 'my-img'
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}