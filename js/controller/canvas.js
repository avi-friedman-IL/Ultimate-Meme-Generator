'use strict'

let gElCanvas
let gCtx

function renderCanvas() {
    const { lines, selectedLineIdx: lineIdx } = getMeme()
    const imgToEdit = getImg()

    const img = new Image()
    img.src = imgToEdit.url

    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    gLineLocationX = gElCanvas.width / 2

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText()
    }
}

function mouseDown(ev) {
    
    const { lines } = getMeme()
    const { offsetX, offsetY} = ev

    let line = lines.find(line => {
        const { x, y, size } = line

        return (offsetX >= x - 300 && offsetX <= x + 300 &&
            offsetY >= y - size && offsetY <= y + size)
    })

    if (line) {
        let lineIdx = lines.findIndex(lineIdx =>
            lineIdx.x >= offsetX - 300 && lineIdx.x <= offsetX + 300
            && lineIdx.y >= offsetY - lineIdx.size && lineIdx.y <= offsetY + lineIdx.size
        )
        
        lines[gMeme.selectedLineIdx].isMark = false
        gMeme.selectedLineIdx = lineIdx
        lines[gMeme.selectedLineIdx].isMark = true
   
    } else {
        lines[gMeme.selectedLineIdx].isMark = false
    }
}

function drawText() {
    
    const { selectedLineIdx: lineIdx, lines } = getMeme()
    
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    
    let x = gElCanvas.width / 2
    
    lines.forEach(line => {
        gCtx.font = `${line.size}px Arial`
        gCtx.fillStyle = line.color
        gCtx.fillText(line.txt, x, line.y)
        gCtx.strokeStyle = line.borderColor
        if (line.isMark)gCtx.strokeRect(100, line.y - line.size / 2, x, line.size)
        gCtx.stroke()
    })
}

function downloadCanvas(elLink) {
    elLink.download = 'my-img'
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}