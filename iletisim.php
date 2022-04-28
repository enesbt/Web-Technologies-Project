<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS/iletişim.css">
    <title>İletişim</title>
  </head>
  <body style="margin: 0px 10px;">

  <?php 
  if(empty($_POST['ad'])||empty($_POST['email'])||empty($_POST['mesaj'])){
    header("Location: iletişim.html"); 
  }
  else if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

  }else{
    echo 'geçersiz e posta adresi';
    header("Location: iletişim.html"); 
  }  
  ?>

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
           <div class="col-sm-2"></div>
             <div class="col-md-8 col-sm-8">
               <h2>FORM BİLGİLERİ</h2>
                <table class="formbilgi" border="1px">
                    <tr>
                        <th>AD</th>
                        <td>:</td>
                        <td><?php echo $_POST['ad']?></td>
                    </tr>
                    <tr>
                        <th>E-MAİL</th>
                        <td>:</td>
                        <td><?php echo $_POST['email']?></td>
                    </tr>
                    <tr>
                        <th>CİNSİYET</th>
                        <td>:</td>
                        <td><?php echo $_POST['cinsiyet']?></td>
                    </tr>
                    <tr>
                        <th>EnBeğenilenSayfa</th>
                        <td>:</td>
                        <td><?php echo $_POST['sayfa']?></td>
                    </tr>
                    <tr>
                        <th>PUAN</th>
                        <td>:</td>
                        <td><?php echo $_POST['puan']?></td>
                    </tr>
                    <tr>
                        <th>MESAJ</th>
                        <td>:</td>
                        <td><?php echo $_POST['mesaj']?></td>
                    </tr>                  
                </table>
             </div>
         </div>
     </div>
     




     <script src="JS/iletişim.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>