function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var res = window.document.getElementById('res')
    var data = new Date()
    var hora = data.getHours()

    if (hora >=0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#d2b38d'
    }else if (hora < 18){
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#dbcfcd'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#f7bbd4'
    }
    msg.innerHTML = `Agora são ${hora} horas.`

}
        
