let chooseColor = document.querySelectorAll('.choose__color-btn');
let contentItem = document.querySelectorAll('.content-item');
screen.lockOrientation("landscape");


chooseColor.forEach(function(element) {
    element.addEventListener('click', open)
})

function open(event){
    let target = event.currentTarget;
    let button = target.dataset.button;
    let contentActive = document.querySelectorAll(`.${button}`)
    console.log(contentActive)
    


    chooseColor.forEach(function(item) {
        item.classList.remove('choose__color-btn--active')
    })
    target.classList.add('choose__color-btn--active')

    contentItem.forEach(function(item) {
        item.classList.remove('content-item__active')
    })

    contentActive.forEach(function(item) {
        item.classList.add('content-item__active')
    })
}
