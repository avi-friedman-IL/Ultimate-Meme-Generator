'use strict'
function initCanvas() {

  
}


function drawText(text, x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'

    gCtx.fillStyle = 'white'

    gCtx.font = '30px Arial'
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