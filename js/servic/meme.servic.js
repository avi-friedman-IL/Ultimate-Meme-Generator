'use strict'

var gImgs

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: 
        {
            txt: '',
            size: 20,
            color: 'red'
        } 
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

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

function setLineTxt(el) {
    gMeme.lines.txt = el.value
}

function setImg(id) {
    gMeme.selectedImgId = id
}


