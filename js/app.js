function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (gameClicado.classList.contains('dashboard__item__img--rented'), 
       (gameClicado.classList.contains('dashboard__item__button--return')), 
       (gameClicado.classList.contains('dashboard__item__img')), 
       (gameClicado.classList.contains('dashboard__item__button'))) {
        gameClicado.classList.remove('dashboard__item__img--rented');
        gameClicado.classList.remove('dashboard__item__button--return');
        gameClicado.classList.add('dashboard__item__img');
        gameClicado.classList.add('dashboard__item__button');
        gameClicado.innerText = 'Alugar';
    } else { 
        gameClicado.classList.remove('dashboard__item__img');
        gameClicado.classList.remove('dashboard__item__button');
        gameClicado.classList.add('dashboard__item__img--rented');
        gameClicado.classList.add('dashboard__item__button--return');
        gameClicado.innerText = "Devolver";
    }
}
