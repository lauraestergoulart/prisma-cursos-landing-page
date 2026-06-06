document.addEventListener('DOMContentLoaded', () => {

    function configurarValidacao(idBotao, urlSucesso) {
        const botao = document.getElementById(idBotao);
        if (!botao) return;

        const formulario = botao.closest('form');
        if (!formulario) return;

        const camposObrigatorios = formulario.querySelectorAll('.obrigatorio');

        camposObrigatorios.forEach((campo) => {
            campo.addEventListener('input', () => {
                if (campo.value.trim() !== '') {
                    campo.style.border = '1px solid #ccc';
                }
            });
        });

        botao.addEventListener('click', (event) => {
            event.preventDefault();

            let formularioValido = true;

            camposObrigatorios.forEach((campo) => {
                if (campo.value.trim() === '') {
                    campo.style.border = '2px solid red'; 
                    formularioValido = false;
                }
            });

            if (!formularioValido) {
                alert('Atenção: Preencha todos os campos antes de continuar.');
            } else {
                window.location.href = urlSucesso; 
            }
        });
    }

    configurarValidacao('btn-inscricao', 'sucesso-inscricao.html');
    configurarValidacao('btn-entrar', 'sucesso-login.html');
    configurarValidacao('btn-enviar', 'sucesso-contato.html');
});