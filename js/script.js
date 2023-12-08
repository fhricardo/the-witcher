const character = document.getElementById('character');
const characterName = document.getElementById('name');
const btnClose = document.getElementById('close');

function witcher(value) {
    btnClose.setAttribute('class', 'show');
    switch (value) {
        case 'yennefer':
            //               assets/char-yennefer.webp
            //               Placeholder ${variavel} --->>>  ``
            character.src = `assets/char-${value}.webp`;
            characterName.innerHTML = 'Yennefer of Vengerberg';
            break;
        case 'cirilla':
            character.src = `assets/char-${value}.webp`;
            characterName.innerHTML = 'Cirilla of Cintra';
            break;
        case 'emhyr':
            character.src = `assets/char-${value}.webp`;
            characterName.innerHTML = 'Emhyr var Emreis';
            break;
        case 'tissaia':
            character.src = `assets/char-${value}.webp`;
            characterName.innerHTML = 'Tissaia de Vries';
            break;
        case 'gerart':
            character.src = `assets/char-${value}.webp`;
            characterName.innerHTML = 'Gerart of Rivia';
            break;
        case 'vilgefortz':
            character.src = `assets/char-${value}.webp`;
            characterName.innerHTML = 'Vilgefortz of Roggeveen';
            break;
        case 'triss':
            character.src = `assets/char-${value}.webp`;
            characterName.innerHTML = 'Triss Merigold';
            break;
        case 'jaskier':
            character.src = `assets/char-${value}.webp`;
            characterName.innerHTML = 'Jaskier Sandpiper';
            break;
        case 'vesemir':
            character.src = `assets/char-${value}.webp`;
            characterName.innerHTML = 'Vesemir';
            break;
    }
}
function logo() {
    character.src = 'assets/the-witcher-logo.webp';
    btnClose.setAttribute('class', 'hide');
    characterName.innerHTML = '';
}