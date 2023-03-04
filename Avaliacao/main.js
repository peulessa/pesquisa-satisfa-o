const listaNotas = document.querySelectorAll('.item-lista-notas')
const listaNotasBotoes = document.querySelectorAll('.botao-lista')
const submit = document.querySelector('.botao-enviar')

const paginaAvaliacao = document.querySelector('.avaliacao')
const paginaObrigado = document.querySelector('.obrigado')

const valorNota = document.querySelector('.valor-nota')
const totalNota = document.querySelector('.total-nota')

    listaNotas.forEach((elemento)=>{
        elemento.addEventListener('click', (evento)=>{
            nota = evento.target.defaultValue
            
            listaNotasBotoes.forEach((elemento)=>{
                if(elemento.classList.length === 2){
                    elemento.classList.remove('ativo')
                }
                else{
                    evento.target.classList.add('ativo')
                }
            })
            
        })
    })

    submit.addEventListener('click', ()=>{
        recarregaPagina()
    })

    function recarregaPagina(){
        paginaAvaliacao.style.display = 'none';
        paginaObrigado.style.display = 'block';

        valorNota.innerText = nota
        totalNota.innerHTML = listaNotas.length
    }
