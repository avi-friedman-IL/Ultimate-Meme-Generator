'use strict'

let gImgsFiltered

let gImgs

let gPos

let gMeme

let gMemes

getFiltered()
_createMeme()

function _createMeme() {
    gMeme = {
        selectedImgId: '',
        selectedLineIdx: 0,
        linePos: 0,
        lines: [
            {
                borderR: 100,
                x: 100,
                y: 100,
                txt: '',
                size: 25,
                align: '',
                color: 'white',
                fontFamily: 'Arial',
                isDelete: false,
                isMark: true,
                isDrag: false,
            }
        ]
    }
    return gMeme
}

_createImgs()
_createMemes()

function _createMemes() {
    gMemes = []
}

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


function _createImg(id, url, keywords) {
    return {
        id, url, keywords
    }
}

function _createImgs() {
   return gImgs = [
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/2.jpg', ['happy']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/3.jpg', ['happy']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/4.jpg', ['happy']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/5.jpg', ['happy']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/6.jpg', ['happy']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/7.jpg', ['happy']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/8.jpg', ['happy']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/9.jpg', ['happy']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/10.jpg', ['happy']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/2.jpg', ['sad']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/003.jpg', ['sad']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/004.jpg', ['sad']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/005.jpg', ['sad']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/006.jpg', ['sad']),
    ]
}

function filterByWords(value) {
     gImgsFiltered = gImgs.filter(img => img.keywords.find(key => key === value))
}

function searchImg(value) {
    gImgsFiltered = gImgs.filter(img => img.keywords.find(key => key.includes(value)))
}

function getFiltered() {
    return gImgsFiltered
}

function clearFilter() {
    gImgsFiltered = ''
}

function getImg() {
    return gImgs.find(img => img.id === gMeme.selectedImgId)
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function randomizeCanvas() {
    let idx = gImgs.findIndex((img, idx) => idx === getRandomInt(0, getImgs().length - 1))
    gMeme.selectedImgId = gImgs[idx].id
}

function setImg(id) {
    gMeme.selectedImgId = id
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function textSizeIncrease() {
    if (gMeme.lines[gMeme.selectedLineIdx].size > 70) return
    gMeme.lines[gMeme.selectedLineIdx].size += 10
}

function textSizeDecrease() {
    if (gMeme.lines[gMeme.selectedLineIdx].size < 20) return
    gMeme.lines[gMeme.selectedLineIdx].size -= 10
}

function selectStickers(sticker) {
    gMeme.lines[gMeme.selectedLineIdx].txt += sticker
}

function textLayout(layout) {
    const { lines } = getMeme()
    switch (layout) {
        case 'left':
            lines[gMeme.selectedLineIdx].x = 50
            break
        case 'center':
            lines[gMeme.selectedLineIdx].x = gElCanvas.width / 2 - 80
            break
        case 'right':
            lines[gMeme.selectedLineIdx].x = 200
            break
    }
}

function clearLine() {
    gMeme.lines[gMeme.selectedLineIdx].isDelete = true
    if(gMeme.selectedLineIdx <= 0) return
    gMeme.lines.splice([gMeme.selectedLineIdx],1)
    gMeme.selectedLineIdx -= 1

}

function selectFont(value) {
    switch (value) {
        case 'arial':
            gMeme.lines[gMeme.selectedLineIdx].fontFamily = 'Arial'
            break
        case 'montserrat':
            gMeme.lines[gMeme.selectedLineIdx].fontFamily = 'Montserrat'
            break
        case 'roboto':
            gMeme.lines[gMeme.selectedLineIdx].fontFamily = 'Roboto'
            break
        case 'poppins':
            gMeme.lines[gMeme.selectedLineIdx].fontFamily = 'Poppins'
            break
    }
}

function addLine() {
    let { lines, linePos } = gMeme
    linePos += 50
    gMeme.lines.push(
        {
            borderR: 100,
            x: 100,
            y: lines[lines.length - 1].y + linePos,
            txt: '',
            size: 25,
            align: '',
            color: '',
            fontFamily: 'Arial',
            isDelete: false,
            isMark: true,
            isDrag: false
        })

    lines[gMeme.selectedLineIdx].isMark = false
    gMeme.selectedLineIdx = lines.length - 1
    lines[gMeme.selectedLineIdx].txt = ''
    lines[gMeme.selectedLineIdx].isMark = true
}

function switchLine() {
    let { lines } = gMeme
    lines[gMeme.selectedLineIdx].isMark = false

    if (gMeme.selectedLineIdx >= lines.length - 1) {
        gMeme.selectedLineIdx = 0
        lines[gMeme.selectedLineIdx].isMark = true
    } else {
        gMeme.selectedLineIdx += 1
        lines[gMeme.selectedLineIdx].isMark = true
    }
}

function isLineClicked(clickedPos) {
    const { x, y } = gMeme.lines[gMeme.selectedLineIdx]

    return (clickedPos.x >= x - 25 && clickedPos.x <= x + 100 &&
        clickedPos.y >= y - 25 && clickedPos.y <= y + 25)
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}


function moveLine(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].x += dx
    gMeme.lines[gMeme.selectedLineIdx].y += dy
    renderMeme()
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

function onDown(ev) {
    ev.preventDefault()
    gPos = getEvPos(ev)

    if (!isLineClicked(gPos)) return

    setLineDrag(true)
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    ev.preventDefault()
    const { x, y, isDrag } = gMeme.lines[gMeme.selectedLineIdx]
    if (!isDrag) return
    const pos = getEvPos(ev)

    const dx = pos.x - x
    const dy = pos.y - y
    moveLine(dx, dy)


    gMeme.lines[gMeme.selectedLineIdx].x = pos.x
    gMeme.lines[gMeme.selectedLineIdx].y = pos.y

    gPos = pos
}

function getEvPos(ev) {
    ev.preventDefault()
    if (TOUCH_EVENTS.includes(ev.type)) {

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

function saveMeme(canvas) {
    gMemes.push({ url: canvas.toDataURL(), id: gMeme.selectedImgId })
    saveToStorage('memes', gMemes)
}
