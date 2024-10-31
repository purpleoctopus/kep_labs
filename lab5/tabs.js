let sizes = []
let pointer
let tabContents = []
let gap
const count = 3

window.onload = () => {
    pointer = document.getElementById('pointer')
    for(let i = 0; i<count; i++){
        sizes.push(window.getComputedStyle(document.getElementsByClassName('tab').item(i)).width);
        tabContents.push(document.getElementsByClassName('tab-content').item(i))
        document.getElementsByClassName('tab').item(i).onclick = () => selectTab(i)
    }
    gap = window.getComputedStyle(document.getElementById('tab-container')).gap
    selectTab(0)
}

function selectTab(number){
    tabContents.forEach((elem) => elem.classList.add('hide'))
    tabContents[number].classList.remove('hide')
    let pos = 0
    for(let i = 0; i<number;i++){
        pos += parseInt(sizes[i].substring(0, sizes[i].length - 2)) + parseInt(gap.substring(0, gap.length - 2)) + 10 // 10 px padding :)
    }
    pointer.style.left = `${pos}px`
    pointer.style.width = `${parseInt(sizes[number].substring(0, sizes[number].length - 2))}px`
}