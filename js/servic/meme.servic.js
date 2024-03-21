'use strict'

let gImgs

// let gLineLocationX
// let gLineLocationY = 100

let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    linePos: 0,
    lines: [
        {
            borderXL:200,
            borderXR:25,
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

createImgs()

function createImg(id, url, keywords) {
    return {
        id, url, keywords
    }
}

function createImgs() {
    gImgs = [
        createImg(2, 'meme-imgs/meme-imgs (square)/2.jpg', ['funny', 'cat']),
        createImg(3, 'meme-imgs/meme-imgs (square)/3.jpg', ['funny', 'cat']),
        createImg(4, 'meme-imgs/meme-imgs (square)/4.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(6, 'meme-imgs/meme-imgs (square)/6.jpg', ['funny', 'cat']),
        createImg(7, 'meme-imgs/meme-imgs (square)/7.jpg', ['funny', 'cat']),
        createImg(8, 'meme-imgs/meme-imgs (square)/8.jpg', ['funny', 'cat']),
        createImg(9, 'meme-imgs/meme-imgs (square)/9.jpg', ['funny', 'cat']),
        createImg(10, 'meme-imgs/meme-imgs (square)/10.jpg', ['funny', 'cat']),
        // createImg(11, 'meme-imgs/meme-imgs (square)/11.jpg', ['funny', 'cat']),
        createImg(12, 'meme-imgs/meme-imgs (square)/12.jpg', ['funny', 'cat']),
        createImg(13, 'meme-imgs/meme-imgs (square)/13.jpg', ['funny', 'cat']),
        createImg(14, 'meme-imgs/meme-imgs (square)/14.jpg', ['funny', 'cat']),
        createImg(15, 'meme-imgs/meme-imgs (square)/15.jpg', ['funny', 'cat']),
        createImg(16, 'meme-imgs/meme-imgs (square)/16.jpg', ['funny', 'cat']),
        createImg(17, 'meme-imgs/meme-imgs (square)/17.jpg', ['funny', 'cat']),
    ]
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
            lines[gMeme.selectedLineIdx].align = 'left'
            break
        case 'center':
            lines[gMeme.selectedLineIdx].align = 'center'
            break
        case 'right':
            lines[gMeme.selectedLineIdx].align = 'right'
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
    linePos += 30
    gMeme.lines.push(
        {
            borderXL:200,
            borderXR:25,
            x: 0,
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