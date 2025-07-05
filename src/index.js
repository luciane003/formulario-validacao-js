const inputs = document.querySelectorAll('.campo');

const botao = document.querySelector('.botao');

botao.addEventListener('click',function(evento) {
    evento.preventDefault();

    inputs.forEach(function(input){
        if (input.value.trim() === "") {
            const mensagemErro = input.parentElement.querySelector('.mensagem-alerta');
            mensagemErro.style.visibility = "visible";
            input.classList.add('erro');
            input.classList.remove('sucesso');

        }else {
            const mensagemErro = input.parentElement.querySelector('.mensagem-alerta');
            mensagemErro.style.visibility = "hidden";
            input.classList.remove('erro');
            input.classList.add('sucesso');
        }
    })
});