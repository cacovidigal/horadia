function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //foto da manhã
        img.src = '../amanhecer-fotor.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //foto da tarde
        img.src = '../livraria_tarde_fotor.png'
        document.body.style.background = '#b9846f'
    } else {
        //foto da noite
        img.src = '../noite_fotor.png'
        document.body.style.background = '#384252'
    }
}