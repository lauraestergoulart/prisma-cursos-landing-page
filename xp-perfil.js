document.addEventListener('DOMContentLoaded', () => {
    
    const elementoXP = document.getElementById('xp-contador');

    function atualizarTelaXP() {
        let xpAtual = parseInt(localStorage.getItem('usuarioXP')) || 0;
        
        if (elementoXP) {
            elementoXP.innerText = xpAtual;
        }
        return xpAtual; 
    }

    atualizarTelaXP();

    const botoesResgatar = document.querySelectorAll('.btn-resgatar');

    botoesResgatar.forEach((botao) => {
        botao.addEventListener('click', () => {
            
            let xpAtual = atualizarTelaXP();
            
            const custoItem = parseInt(botao.getAttribute('data-custo')) || 0;

            if (xpAtual >= custoItem) {
                
                xpAtual = xpAtual - custoItem;
                localStorage.setItem('usuarioXP', xpAtual);
                
                atualizarTelaXP();

                alert('🎉 Recompensa resgatada com sucesso!');

                botao.innerText = 'Resgatado';
                botao.disabled = true;
                botao.style.opacity = '0.5';
                botao.style.cursor = 'not-allowed';

            } else {                
                const xpFaltante = custoItem - xpAtual;
                alert(`Ops! Saldo insuficiente. Faltam ${xpFaltante} XP para resgatar este item. Vá fazer mais missões!`);
            }
        });
    });

});