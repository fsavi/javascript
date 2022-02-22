function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var mim = data.getMinutes()  


    
    msg.innerHTML = `Agora são ${hora}:${mim}hs `
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png' 
        document.body.style.background = '#e6d4ba'
    }else if (hora >=12 && hora <= 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#eea789'
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#236072' 
    }

}

