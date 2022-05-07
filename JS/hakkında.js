let butonDom = document.querySelector('.buton')
let icerikDom = document.querySelector('.icerik')

function butonEkle(){
    let buton = `
    <button onclick="egitim()" type="button" id="egitim"  class="btn btn-danger kısaca my-1">Eğitim</button><br>
    <button onclick="hobi()" type="button" id="hobi" class="btn btn-danger kısaca my-1">Hobilerim</button>    <br>
    <button onclick="prgdil()" type="button" id="etkinlik" class="btn btn-danger kısaca my-1">ProgramlamaDilleri</button>    <br>
    <button onclick="spor()" type="button" id="spor" class="btn btn-danger kısaca my-1">Spor</button>    <br>
    `
    butonDom.innerHTML=buton
}
butonEkle()

function egitim(){
    let egitimsayfa = `
    <h3 class="mt-3" style="color:#330000">EĞİTİM BİLGİLERİ</h3>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Ankara Yıldırım Beyazıt Üniversitesi - Odyoloji<button type="button" class="btn btn-danger float-end disabled">X</button> </li>
    <li class="list-group-item">Atatürk Üniversitesi - Bilgisayar Programcılığı <div class="spinner-border text-primary float-end" role="status">
    <span class="visually-hidden ">Loading...</span>
  </div></li>
    <li class="list-group-item">Sakarya Üniversitesi - Bilgisayar Mühendisliği    <div class="spinner-border text-primary float-end" role="status">
    <span class="visually-hidden ">Loading...</span>
  </div></li>
   </ul>`
   icerikDom.innerHTML=egitimsayfa
}
function hobi(){
  let hobisayfa = `
  <h3 class="mt-3" style="color:#330000">HOBİLERİM</h3>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Dizi-Film İzlemek</li>
  <li class="list-group-item">Yürüyüş Yapmak</li>
  <li class="list-group-item">Yemek Yapmak</li>
  <li class="list-group-item">Yüzmek</li>
 </ul>`
 icerikDom.innerHTML=hobisayfa
}

function prgdil(){
  let programsayfa = `
  <h3 class="mt-3" style="color:#330000">KULLANDIĞIM PROGRAMLAMA DİLLERİ</h3>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">HTML<div class="progress" >
  <div  class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
</div></li>
  <li class="list-group-item">CSS<div class="progress">
  <div class="progress-bar progress-bar-animated progress-bar-striped bg-success" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
</div></li>
  <li class="list-group-item">JAVASCRİPT<div class="progress">
  <div class="progress-bar progress-bar-animated progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div></li>
  <li class="list-group-item">C++<div class="progress">
  <div class="progress-bar progress-bar-animated progress-bar-striped bg-danger" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div></li>
  <li class="list-group-item">C#<div class="progress">
  <div class="progress-bar progress-bar-animated progress-bar-striped bg-danger" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div></li>
<li class="list-group-item">Python<div class="progress">
  <div class="progress-bar progress-bar-animated progress-bar-striped bg-danger" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div></li>
 </ul>`
 icerikDom.innerHTML=programsayfa

}
function spor(){
  let sporsayfa = `
  <h3 class="mt-3" style="color:#330000">İlgilendiğim Sporlar</h3>
  <ul class="list-group list-group-flush" ;">
 <div class="spinner-grow" role="status">
 <li class="list-group-item">Futbol</li> </div>
 <div class="spinner-grow" role="status">
 <li class="list-group-item">Yüzme</li> </div>
 <div class="spinner-grow" role="status">
 <li class="list-group-item">Bisiklet</li> </div>
 <div class="spinner-grow" role="status">
 <li class="list-group-item">Boks</li> </div>
 </ul>`
 icerikDom.innerHTML=sporsayfa
}


