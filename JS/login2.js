function kontrol(){
    let kullanıcıadı = document.querySelector("#kadı");
    let sifre = document.querySelector("#sifre");
   
   let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
   if (kullanıcıadı.value == "" || sifre.value == "") {  
       alert("boş bırakılamaz")
   } 
	else if (regex.test(kullanıcıadı.value)==true)
	{alert("Mail adresi geçerli");}
	else
	{alert("Hata geçersiz mail adresi girdiniz!");}
}