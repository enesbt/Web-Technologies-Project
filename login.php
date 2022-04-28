<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Login</title>
  </head>
  <body style="margin: 0px 10px;">
    <!--Navbar-Start-->
    <div id="alert"></div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a style="color: #330000;" class="navbar-brand" href="hakkında.html">EBT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="hakkında.html">Hakkında</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="ilgialanlarım.html">İlgi Alanlarım</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="şehrim.html">Şehrim</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="takımımız.html">Takımımız</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="iletişim.html">İletişim</a>
              </li>   
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="özgeçmiş.html">Özgeçmiş</a>
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
             header("Location: login.html"); 
        }
     }
     else{
         echo 'boş bırakmayınız';
         header("Location: login.html"); 
     } 
     ?>

    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>