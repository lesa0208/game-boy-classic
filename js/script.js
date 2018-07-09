const onOfSpan = document.querySelector('.on-off span');

const powerButton = document.querySelector('.power-off');
const innerLogo = document.querySelector('.screen-inner-logo');
const playSound = document.getElementById('power-sound');
onOfSpan.addEventListener('click', () => {
    powerButton.classList.toggle('power-on');
    if (powerButton.classList.contains('power-on')) {
        playSound.play();
    }
    innerLogo.classList.toggle('inner-logo-end');
});