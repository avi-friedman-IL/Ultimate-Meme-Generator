'use strict'

let gImgs

let gLineLocationY = 100

let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            y: gLineLocationY,
            txt: '',
            size: 25,
            color: 'black'
        },

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
        createImg(1, 'meme-imgs/meme-imgs (square)/1.jpg', ['funny', 'cat']),
        createImg(2, 'meme-imgs/meme-imgs (square)/2.jpg', ['funny', 'cat']),
        createImg(3, 'meme-imgs/meme-imgs (square)/3.jpg', ['funny', 'cat']),
        createImg(4, 'meme-imgs/meme-imgs (square)/4.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(6, 'meme-imgs/meme-imgs (various aspect ratios)/2.jpg', ['funny', 'cat']),
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

function setLineTxt(el) {
    gMeme.lines[gMeme.selectedLineIdx].txt = el.value
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

function addLine() {
    gLineLocationY += 50
    gMeme.lines.push(
        {
            y: gLineLocationY,
            txt: '',
            size: 25,
            color: 'black'
        })
    gMeme.selectedLineIdx += 1
    console.log(gMeme)
}

function switchLine() {
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx += 1
    else gMeme.selectedLineIdx -= 1
}