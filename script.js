const $ = document
const characterFaceElem = $.querySelector('#face')
const characterHornsElem = $.querySelector('#monster-horns')
const characterTailElem = $.querySelector('#monster-tail')
const faceBtn = $.querySelector('#face-btn')
const colorBtn = $.querySelector('#color-btn')
const hornsBtn = $.querySelector('#horns-btn')
const tailBtn = $.querySelector('#tail-btn')




const bodyColors = [
    "#a8d530",
    "#42aaff",
    "#f3d55b",
    "#ff4f51",
    "#904ae8",
    "#ffa711",
];


const appendageColors  = [...bodyColors, "transparent"] 



let currentIndex = 0


const loopHandler = (num) => {
    currentIndex++

    if(currentIndex > num) {
        currentIndex = 0
    }
}

const changeFaceHandler = () => {
   
    loopHandler(5)
    characterFaceElem.src = `face-${currentIndex}.png`;
}


const changeBodyColorHandler = () => {
    loopHandler(5)
    document.documentElement.style.setProperty("--color-character", `${bodyColors[currentIndex]}`);
}


const changeHornsColorHandler = () => {

    loopHandler(6)

    document.documentElement.style.setProperty('--color-horns', appendageColors[currentIndex])
}


const changeTailColorHandler = () => {

    loopHandler(6)

    document.documentElement.style.setProperty('--color-tail', appendageColors[currentIndex])
}




faceBtn.addEventListener('click', changeFaceHandler)
colorBtn.addEventListener('click', changeBodyColorHandler)
hornsBtn.addEventListener('click', changeHornsColorHandler)
tailBtn.addEventListener('click', changeTailColorHandler)


