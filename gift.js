const clickedGift = document.getElementById('gift')
const clickLove = document.getElementById('clickLove')
clickedGift.addEventListener('click', (e) => {
    triggerClick()
})

let show = 0;

if (show == 0) {
    clickLove.style.display = 'none';
} else {
    clickLove.style.display = 'none';

}

function triggerClick() {
    clickLove.style.display = 'block';
    display = 1;
}