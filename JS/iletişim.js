
function range(){
    let puanDom = document.querySelector('#customRange1')
    let puanyazDom = document.querySelector('#puan')
    setInterval(function yaz(){puanyazDom.innerHTML=puanDom.value},1000)
}
range()

function formkontrol(){
    let ad    = document.querySelector('#ad')
    let email = document.querySelector('#email')
    let mesaj = document.querySelector('#mesaj')
    let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;

    if(ad.value!=""||email.value!=""||mesaj.value!=""){
        if (regex.test(email.value)==true)
        {alert("mail adresi gecerli")}
        else
        {alert("Hata geçersiz mail adresi girdiniz!");}

    }
    else{
        alert('BOŞ KISIMLARI DOLDURUN')
        ad.value=""
        email.value=""
        mesaj.value=""
    }
 
}



