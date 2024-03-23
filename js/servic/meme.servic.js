'use strict'

let gImgs

let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    linePos: 0,
    lines: [
        {
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

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

_createImgs()

function _createImg(id, url, keywords) {
    return {
        id, url, keywords
    }
}

function _createImgs() {
    gImgs = [
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/2.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/3.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/4.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/6.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/7.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/8.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/9.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (square)/10.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/2.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/003.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/004.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/005.jpg', ['funny', 'cat']),
        _createImg(makeId(), 'meme-imgs/meme-imgs (various aspect ratios)/006.jpg', ['funny', 'cat']),
    ]
    console.log(gImgs);
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
    let idx = gImgs.findIndex((img,idx) => idx === getRandomInt(0,getImgs().length))
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
    gMeme.lines[gMeme.selectedLineIdx].size += 10
}

function textSizeDecrease() {
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