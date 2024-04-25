const numeroSorteado = Math.round(Math.random() * 10);
console.log(numeroSorteado);
let tentativas = 1;

function handleTryClick(e) {
    e.preventDefault();
    const inputNumber = document.querySelector('#inputNumber');

    if (Number(inputNumber.value) === numeroSorteado) {
        document.querySelector('.screen1').classList.add('hide');
        document.querySelector('.screen2').classList.remove('hide');

        tentativas > 1
            ? (document.querySelector(
                  '.screen2 h2',
              ).innerText = `Acertou em ${tentativas} tentativas`)
            : (document.querySelector(
                  '.screen2 h2',
              ).innerText = `Acertou em ${tentativas} tentativa`);
    }

    console.log(tentativas);

    tentativas++;
}

const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', function () {
    location.reload();
});
