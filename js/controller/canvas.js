'use strict'

let gElCanvas
let gCtx

function renderCanvas() {

    const meme = getMeme()
    const imgToEdit = getImg()

    const { lines, selectedLineIdx: lineIdx } = meme

    const img = new Image()
    img.src = imgToEdit.url


    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.fillStyle = lines[lineIdx].color
        gCtx.font = `${lines[lineIdx].size}px Arial`
        drawText(lines[lineIdx].txt)

    }
}


function drawText() {
    const meme = getMeme()
    const { selectedLineIdx: lineIdx, lines } = meme


    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    let x = gElCanvas.width / 2
    
    lines.forEach(line => {
        gCtx.font = `${line.size}px Arial`
        gCtx.fillStyle = line.color
        gCtx.fillText(line.txt, x, line.y)
        // gCtx.strokeRect(100, line.y - line.size / 2, x, line.size)
        gCtx.stroke()
    })
}

function downloadCanvas(elLink) {
    elLink.download = 'my-img'
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}