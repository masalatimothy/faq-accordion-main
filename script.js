function showHide() {
    let img = document.getElementById('img1')
    let paragraph1 = document.getElementById('paragraph1')

    if (paragraph1.style.display == 'none') {
        paragraph1.style.display = 'block'
        img.src = 'assets/images/icon-minus.svg'
    } else {
        paragraph1.style.display = 'none'
        img.src = 'assets/images/icon-plus.svg'
    }
}

function showHide2() {
    let img = document.getElementById('img2')
    let paragraph2 = document.getElementById('paragraph2')

    if(paragraph2.style.display == 'block') {
        paragraph2.style.display = 'none'
        img.src = 'assets/images/icon-plus.svg'
    } else {
        paragraph2.style.display = 'block'
        img.src = 'assets/images/icon-minus.svg'
    }
}

function showHide3() {
    let img = document.getElementById('img3')
    let paragraph3 = document.getElementById('paragraph3')

    if(paragraph3.style.display == 'block') {
        paragraph3.style.display = 'none'
        img.src = 'assets/images/icon-plus.svg'
    } else {
        paragraph3.style.display = 'block'
        img.src = 'assets/images/icon-minus.svg'
    }
}

    
function showHide4() {
    let img = document.getElementById('img4')
    let paragraph4 = document.getElementById('paragraph4')

    if(paragraph4.style.display == 'block') {
        paragraph4.style.display = 'none'
        img.src = 'assets/images/icon-plus.svg'
    } else {
        paragraph4.style.display = 'block'
        img.src = 'assets/images/icon-minus.svg'
    }
}