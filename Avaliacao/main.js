const listaNotas = document.querySelectorAll('.item-lista-notas')

listaNotas.forEach((elemento)=>{
    console.log(elemento.length)
    elemento.addEventListener('click', (evento)=>{
        const nota= evento.target.defaultValue
        console.log(listaNotas)

        
        // evento.target.className = "botao-lista-onclick"
    
    })
})
