const botaoMenu = document.querySelector (".icone")
const menu = document.querySelector(".menu")
const menuAberto = document.querySelector (".menu-aberto")


botaoMenu.addEventListener('click', function(event) {
    event.preventDefault()
    menu.classList.toggle ('menu-aberto')
    
    if (menu.classList.contains('menu-aberto')) {
        botaoMenu.innerHTML = "Fechar &times;"
    } else {
        botaoMenu.innerHTML = "Menu &equiv;"
    }
})

// CONTADOR DE CARACTERES DO CAMPO DE MENSAGEM DO FORMULARIO

const spanMaximo = $("#maximo")
const bCaracteres = $("#caracteres")
const textMensagem = $("#mensagem")

// determinando a quantidade de caracteres

let quantidade = 100;

//ouvinte de evento

textMensagem.on ("input", function () {
    //capturando o que for digitado
    let conteudo = textMensagem.val()
    console.log (conteudo)
    
    //adicionando a contagem
    let contagem = quantidade - conteudo.length

    //exibindo o número do html
    bCaracteres.text(contagem)
    
    if (contagem == 0 ) {
        spanMaximo.css ('color','red');
        spanMaximo.text("(Limite de caracteres alcançado)")
    } else {
        spanMaximo.css('color','black')
        spanMaximo.html("(Resta <b id='caracteres'> " +contagem +"</b> caracter.)")
    }

})



