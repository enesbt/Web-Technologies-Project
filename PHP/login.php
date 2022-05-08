<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="../CSS/loginphp.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="../JS/all.min.js"></script><!--iconsınıfı-->
    <title>Login</title>
  </head>
  <body class="body" style="margin: 0px 10px;">
    <!--Navbar-Start-->
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light"style="background-color: #fff7f7;">
        <div class="container-fluid">
        <a style="color:#181818;font-weight: 600;" class="navbar-brand" href="hakkında.html">EBT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../hakkında.html">Hakkında</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../ilgialanlarım.html">İlgi Alanlarım</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../şehrim.html">Şehrim</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../takımımız.html">Takımımız</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../özgeçmiş.html">Özgeçmiş</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../iletişim.html">İletişim</a>
              </li>   
              <li class="nav-item" style="border-left: 1px solid black;">
                <a class="nav-link active" aria-current="page" href="../login.html">Giriş Yap</a>
              </li>       
            </ul>   
          </div>
        </div>
      </nav>
     </div>
     <!--Navbar-End--> 
     <div class="container">
       <div class="row mt-5">
         <div style="text-align: center;">
           <h1>HOŞGELDİN</h1>
           <h2><?php echo $_POST['kadı'] ?></h2>
         </div>
       </div>
     </div>
     <?php
     $kadı = "g211210372@sakarya.edu.tr";
     $sifre = "g211210372";
     if(isset($_POST['kadı'])||isset($_POST['sifre'])){
         if($_POST['kadı']==$kadı && $_POST['sifre']==$sifre){
         }
         else{
             echo 'yanlış kullanıcı adı veya şifre';
             header("Location: ../login.html"); 
        }
     }
     else{
         echo 'boş bırakmayınız';
         header("Location: ../login.html"); 
     } 
     ?>

        <!--Footer-Start-->
        <footer>
     <div class="container mt-5">
       <div class="row ">
        <div class="col-md-3 col-sm-3">
        </div>
        <div class="col-md-3 col-sm-3 mt-5" style="border-right: 1px solid white">
       
          <ul class="footer-list">
            <h5 class="footer-h mb-2">İletişim</h5>
            <li class="mb-1">
              <span>
                <a style="color:white;" href="https://www.instagram.com/?hl=tr" target="_blank">
                  <i class="fa-brands fa-instagram fa-lg"></i> <span>&nbsp  enes.bt </span>
                </a>
              </span>
            </li>         
            <li class="mb-1">
              <span>
                <a href="https://twitter.com/Enesbtg" target="_blank">
                  <i class="fa-brands fa-twitter fa-lg"></i><span>&nbsp  enesbtg </span>
                </a> 
              </span>
            </li>
            <li class="mb-1">
              <span>
                <a style="color:white;">
                  <i class="fas fa-phone fa-lg"></i>
                  +5435514080
                </a>         
              </span>
            </li>
            <li >
              <span>
                <a style="color:white;">
                  <i class="far fa-envelope fa-lg"></i>
                  burdaenesvar@gmail.com
                </a>         
              </span>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-3 mt-5">          
          <ul class="footer-list">
            <h5 class="footer-h">Faydalı Linkler</h5>
            <li><a href="../hakkında.html">Hakkında</a> </li>
            <li><a href="../ilgialanlarım.html">İlgi Alanlarım</a></li>
            <li><a href="../şehrim.html">Şehrim</a></li>
            <li><a href="../takımımız.html">Takımımız</a></li>
            <li><a href="../özgeçmiş.html">Özgeçmiş</a></li>
            <li><a href="../iletişim.html">İletişim</a></li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-3"></div>
       </div>
       <div class="row">
         <div class="col-md-12 col-sm-12 mt-3">
           <p style="text-align: center; color: #8f8c8c;">©2022 Enes Buğra Turğut</p>
         </div>
       </div>
     </div>
   </footer>
  <!--Footer-End-->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>