function kontrol(){
    let kullanıcıadı = document.querySelector("#kadı");
    let sifre = document.querySelector("#sifre");
   
   let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
   if (kullanıcıadı.value != "" || sifre.value != "") {  
        if (regex.test(kullanıcıadı.value)!=true)
       {
            alert("Hata geçersiz mail adresi girdiniz!")
       }
       if(sifre.value!="g211210372"||kullanıcıadı.value!="g211210372@sakarya.edu.tr"){
           alert("Yanlış Şifre Ya Da Kullanıcı Adı");
       }
   }
   else{
       alert("Boş Bırakmayınız!!");
   }
	
}
