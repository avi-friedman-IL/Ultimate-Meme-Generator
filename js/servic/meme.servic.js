'use strict'

let gImgs

let gLineLocationX
let gLineLocationY = 100

let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            x: gLineLocationX,
            y: gLineLocationY,
            txt: '',
            size: 25,
            align:'center',
            color: 'white',
            fontFamily: 'Arial',
            isDelete: false,
            isMark: true

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
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
        createImg(5, 'meme-imgs/meme-imgs (square)/5.jpg', ['funny', 'cat']),
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

function textLayout(layout){
    const {lines} = getMeme()
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
    let { lines } = gMeme
    gLineLocationY += 30
    gMeme.lines.push(
        {
            x: gLineLocationX,
            y: gLineLocationY,
            txt: '',
            size: 25,
            align:'center',
            color: '',
            fontFamily: 'Arial',
            isDelete:false,
            isMark: true
        })


    lines[gMeme.selectedLineIdx].isMark = false
    gMeme.selectedLineIdx += 1
    lines[gMeme.selectedLineIdx].isMark = true
}

function switchLine() {
    let { lines } = gMeme
    lines[gMeme.selectedLineIdx].isMark = false


    if (gMeme.selectedLineIdx >= lines.length - 1) {
        gMeme.selectedLineIdx = 0
        lines[gMeme.selectedLineIdx].isMark = true
    }
    else {
        // lines[gMeme.selectedLineIdx].isMark = false
        gMeme.selectedLineIdx += 1
        lines[gMeme.selectedLineIdx].isMark = true
    }
}