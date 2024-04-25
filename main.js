const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

console.log(randomNumber);

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', function () {
    location.reload();
});

function handleTryClick(e) {
    e.preventDefault();
    const inputNumber = document.querySelector('#inputNumber');

    if (Number(inputNumber.value) === randomNumber) {
        screen1.classList.add('hide');
        screen2.classList.remove('hide');

        attempts > 1
            ? (screen2.querySelector(
                  'h2',
              ).innerText = `Acertou em ${attempts} tentativas`)
            : (screen2.querySelector(
                  'h2',
              ).innerText = `Acertou em ${attempts} tentativa`);
    }

    attempts++;
}
