'use strict'

let gElCanvas
let gCtx

let gPos
const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

function renderCanvas() {
    addListeners()

    const { lines} = getMeme()

    const imgToEdit = getImg()
    const img = new Image()
    img.src = imgToEdit.url

    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
    lines[gMeme.selectedLineIdx].x = gElCanvas.width / 2

    img.onload = () => {
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

function mouseDown(ev) {
    
    const { lines } = getMeme()
    const { offsetX, offsetY } = ev

    let line = lines.find(line => {
        const { x, y, size } = line

        return (offsetX >= x - 300 && offsetX <= x + 300 &&
            offsetY >= y - size && offsetY <= y + size)
    })

    if (line) {
        let lineIdx = lines.findIndex(lineIdx =>
            lineIdx.x >= offsetX - lineIdx.size && lineIdx.x <= offsetX + lineIdx.size
            && lineIdx.y >= offsetY - lineIdx.size && lineIdx.y <= offsetY + lineIdx.size
        )

        lines[gMeme.selectedLineIdx].isMark = false
        gMeme.selectedLineIdx = lineIdx
        lines[gMeme.selectedLineIdx].isMark = true
   
    } else {
        lines[gMeme.selectedLineIdx].isMark = false
    }
}

function onDown(ev) {
    ev.preventDefault()
    gPos = getEvPos(ev)

    if (!isLineClicked(gPos)) return

    setLineDrag(true)
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const { isDrag } = gMeme.lines[gMeme.selectedLineIdx]
    if (!isDrag) return
    ev.preventDefault()
    const pos = getEvPos(ev)

    const dx = pos.x - gMeme.lines[gMeme.selectedLineIdx].x
    const dy = pos.y - gMeme.lines[gMeme.selectedLineIdx].y

    moveLine(dx, dy)

    gPos = pos
    gMeme.lines[gMeme.selectedLineIdx].x = pos.x
    gMeme.lines[gMeme.selectedLineIdx].y = pos.y

    renderCanvas()
}

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
    renderCanvas()
}

function getEvPos(ev) {
    if (TOUCH_EVENTS.includes(ev.type)) {

        ev.preventDefault()
        ev = ev.changedTouches[0]

        return {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }

    } else {
        return {
            x: ev.offsetX,
            y: ev.offsetY,
        }
    }
}

function isLineClicked(clickedPos) {
    const { x, y } = gMeme.lines[gMeme.selectedLineIdx]

    const distance =
        Math.sqrt((x - clickedPos.x) ** 2 + (y - clickedPos.y) ** 2)

    return distance <= gMeme.lines[gMeme.selectedLineIdx].size
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}


function moveLine(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].x = dx
    gMeme.lines[gMeme.selectedLineIdx].y += dy
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

        gCtx.fillStyle = 'white'
        line.isDelete = false
    })
}

function downloadCanvas(elLink) {
    elLink.download = 'my-img'
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}

