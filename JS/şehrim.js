let butons2 = document.querySelector('.buttons')
let item =  document.querySelector('.items')

function butonadd2(){
    let buton2=`
    <button type="button"  onclick="sehirtarih()" class="sbtn btn btn-outline-danger">Tarih</button><br>
    <button type="button"  onclick="gezilcekyerler()" class="sbtn btn btn-outline-danger">Gezilecek Yerler</button>
    <button type="button"  onclick="tarihiyerler()" class="sbtn btn btn-outline-danger">Tarihi Yerler</button>
    <button type="button"  onclick="muze()" class="sbtn btn btn-outline-danger">Müzeler</button>
    <button type="button"  onclick="genel()" class="sbtn btn btn-outline-danger">Genel Bilgiler</button>
    <br><br>
    <h6>Kaynakça</h6>
    <p style="font-size:12px">Bu sayfada Kullanılan Bilgiler<br>
       <a href="https://www.enuygun.com/bilgi/ankara-da-gezilecek-yerler-mutlaka-gorulmesi-gereken-80-yer/" target="_blank">Vikipedi</a><br>
       <a href="https://tr.wikipedia.org/wiki/Anasayfa" target="_blank">ENUYGUN</a><br>
       adreslerinden alınmıştır.
      </p>
    `
    butons2.innerHTML=buton2
}
butonadd2()

function sehirtarih(){
    let sehrtarih=`<h1>TARİHÇE</h1>
    <h5>Adının Kaynağı</h5>
    <p>Ankara adının kaynağı kesin olarak bilinememektedir. Belgelere dayanmayan ve günümüze kadar gelen söylentilere göre tarihte bahsedilen ilk adı Galatlar tarafından verilen ve Yunanca "çapa" anlamına gelen Ankyra’dır. Bu isim zamanla değişerek Ancyre, Engüriye, Engürü, Angara, Angora ve nihayet Ankara olmuştur.</p>
   <h5>Tarih</h5>
   <p>Helenistik Dönem'de Galat boylarından Tektosag’ların başkenti olan Ankara, Roma Dönemi'nde taşra örgütünün başkenti, Bizans Dönemi'nde imparatorların konakladığı önemli bir kent, Osmanlı döneminde ise Anadolu Eyaleti’nin merkezi olmuştur. 

   İlk kuruluş tarihi kesin olarak bilinmemekle birlikte, kent çevresinde yapılan araştırmalarda bulunan tarih öncesi izler, şehrin insanoğlunun yerleşik düzene geçtiği dönemlerde kurulduğunu göstermektedir. 
   
   Buluntular ve araştırmacıların yaptıkları incelemeler, Ankara’da Hititlerin, Friglerin, Lidyalıların ve Galatların yaşamış olduklarını göstermektedir. Şehrin yerleşik düzeni çok eskilere dayanmasına rağmen tarihi, ancak Hitit devrinden itibaren takip edilebilmektedir. 
   
   Ankara’nın doğusunda bulunan Çorum ili sınırları içinde Boğazköy’de (Hattuşa) yapılan kazılarda, şehirle ilgili önemli ipuçları elde edilmiştir. Bir kısım yabancı tarihçilere göre Hitit eserlerinde sıkça rastlanan Ankuwa, muhtemelen bugünkü Ankara şehrinin bulunduğu yerdedir. 
   
   Hititlerden sonra yöreye Friglerin hâkim oldukları görülmektedir. Eski çağ kaynaklarındaki bir efsaneye göre de Ankara’yı büyük Frig kralı Midas kurmuştur. Şehir merkezi Ulus’ta yapılan kazılarda, Friglerin oturduğuna dair kesin bilgiler elde edilmiştir. Frig devletinin yıkılmasında birinci derecede rol oynayan Kimmer istilasından sonra Ankara Lidyalıların eline geçmiştir. Fakat bu hâkimiyet Pers kralı Kyros’un bütün Anadolu ile birlikte Ankara’yı da zapt etmesi üzerine çok çabuk sona ermiştir. Aradan iki asır geçtikten sonra Büyük İskender, Anadolu’daki Pers hâkimiyetine son vermiştir. 
   
   İmparator Augustos’un Ankara’yı kesin olarak almasından sonra burası bir eyalet olarak gelişmiş; mabetler, pazar yerleri, yollar ve su yolları yapılmıştır. 
   
   Ankara 334–1073 yılları arasında Bizans İmparatorluğu’nun hâkimiyeti altında kalmıştır. Bu süre zarfında da Hristiyanlığın Anadolu’daki önemli bir merkezi olmuştur. VII. yüzyıldaki Sasani akınlarından sonra Araplar şehri bir süre ellerinde tutmuşlardır. 
   
   Ankara’nın kaderi Bizans ordularının Selçuklu Sultanı Alpaslan tarafından 1071 yılında mağlup edilmesiyle sonuçlanan Malazgirt Meydan Muharebesi ile tayin edilmiştir. Bu galibiyet sonucunda şehir Türklerin eline geçmiştir. Ankara’nın Türklerin eline geçmesi son derece önemlidir. Çünkü Ankara Kalesi askeri bakımdan önemli bir konumdaydı. Diğer taraftan, Ege liman kentlerinden başlayarak Mezopotamya ve diğer doğu ülkelerine kadar uzanan önemli yollar üzerinde bulunan bölge, aynı zamanda doğal kaynaklar açısından da zengindi. 
   
   Ankara’nın en parlak devri Alâaddin Keykubat zamanıdır. Bu dönemde şehir askeri bakımdan tahkim edilmiş, cami ve medrese gibi dinî ve ilmî eserlerle de imar edilmiştir. 
   
   Selçuklu sultanı II. Gıyaseddin Keyhüsrev zamanında şehir Moğolların istilasına uğramış, tüm çabalara rağmen istilanın önüne geçilememiştir. Sultan Gıyasettin Keyhüsrev Moğol saldırıları karşısında Ankara Kalesi'ne sığınmıştır. Moğol saldırıları sonunda Selçuklu devleti zayıf düşmüş ve bu durum Anadolu’nun İlhanlılar devletinin egemenliği altına girmesine kadar sürmüştür. Ankara bir süre İlhanlıların gönderdiği valilerin, sonra da Eretna oğullarının yönetimi altında kalmıştır. 1354 yılında Orhan Gazi’nin oğlu Süleyman Paşa, şehri Osmanlı ülkesine katmıştır. Yıldırım Beyazıt devrine kadar önemli bir olay olmamıştır. Ankara Savaşı’ndan sonra şehrin kaderi de değişmiştir. Timur Ankara’dan ayrıldığı sırada, Yıldırım Beyazıt’ın oğlu Mehmet Çelebi padişahlığını ilan etmiş ve böylece Ankara’yı da almıştır. 
   
   Kanuni Sultan Süleyman devrinde Anadolu’da bir eyalet örgütü kurulmuş ve Ankara bu Anadolu eyaletlerinden birinin merkezi olmuştur. Şehir 17. yy. başlarında Celali Ayaklanması sırasında isyancıların eline düşmüştür. II. Mahmut’a isyan eden Mısır valisi Mehmet Ali Paşa’nın kısa bir zaman hâkimiyetine giren Ankara, tekrar Osmanlıların eline geçmiş ve artık hiçbir istilaya uğramadan bir Osmanlı vilayeti olarak kalmıştır. 
   
   Balkan Savaşı sonunda Rumeli vilayetlerinin çoğunun kaybedilmesiyle, batıdaki Türk sınırları İstanbul’a çok yaklaşmıştı. İstanbul Boğazı’nın ele geçirilmesi de oldukça kolaylaşmıştı. Bu yüzden devlet merkezinin İstanbul’da kalması tehlikeli ve sakıncalı görülerek başkentin Anadolu içinde başka bir şehre taşınması düşünülmüştür. Savaş yıllarında en çok saldırı batıdan gelmekteydi ve Ankara bu saldırılara hayli uzak kalıyordu. 27 Aralık 1919 tarihinde, başta Mustafa Kemal Paşa olmak üzere “Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti Heyeti Temsiliyesi” Ankara’ya gelerek 29 Aralık 1919’da yayımlanan bir tebliğ ile bütün mebuslara toplantının Ankara’da yapılacağını duyurmuştur. Bu genelgeden sonra 23 Nisan 1920 tarihinde kurulan Türkiye Büyük Millet Meclisi Hükûmeti'nin merkezi Ankara olarak ilan edilmiştir. 13 Ekim 1923 tarihinde çıkarılan bir kanun ile Ankara, Türkiye Cumhuriyeti’nin başkenti olmuştur. 
   
   Başkent seçildiği yıllarda Ankara çok az sayıda binası olan küçük, yoksul ve çorak bir şehirdi. İstiklal Savaşımızın hazırlanıp sevk ve idare edildiği bir merkez olarak Millî Mücadelemizin sembolü haline gelen bu tarihi şehir, 29 Ekim 1923 tarihinde Türkiye Cumhuriyeti’nin ilanından sonra giderek büyümüş; yepyeni, büyük ve modern bir görünüm kazanmıştır.</p>
    `
    item.innerHTML=sehrtarih
}
function gezilcekyerler(){
    let gezilcekyerler=`<h1>Ankara Görülmesi Gereken Yerler</h1>
    <div class="row mt-3">
    <div class="col-sm-4 col-md-4 mt-4">
    <div class="card" style="width: 100%;">
    <img src="IMG/Şehrim/beypazarı.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Beypazarı</h5>
      <p class="card-text">Osmanlı döneminde tımarlı sipahi eğitim merkezlerinden biri olan Ankara'nın Beypazarı ilçesi, günümüzde klasik Osmanlı mimarisinin en güzel örneklerini görebileceğiniz iki ve üç katlı tarihi evleriyle tam bir açık hava müzesi. Hitit, Frig, Galat, Roma, Bizans, Anadolu Selçuklu ve Osmanlılar
       döneminden pek çok tarihi yapının bulunduğu Beypazarı, asıl ününü ise çarpıcı Beypazarı konaklarına borçlu.</p>
    </div>
  </div>
    </div>
    <div class="col-sm-4 col-md-4 mt-4">
    <div class="card" style="width: 100%;">
    <img src="IMG/Şehrim/eymirgölü.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Eymir Gölü</h5>
      <p class="card-text">Ankara'nın en çok ilgi gören doğal güzelliklerinden biri olan Eymir Gölü, büyüley
      ici göl manzarası ve yemyeşil doğası ile yılın her mevsimi düzenlenen doğa gezilerinin önemli duraklarınd
      an biri. Bir set gölü olan ve 1956 yılında Orta Doğu Teknik Üniversitesi’ne tahsis edilen 45 km2 büyüklüktek
      i Eymir Gölü arazisi; düzenlenmiş yürüyüş parkurları, bisiklet yolları, mesire alanları ve kır bahçeleri ile 
      şehrin kalabalığından doğaya kaçmak için Ankara’daki en güzel yerler arasında. Kendine özgü bitki çeşitliliği ve vahşi yaşam zenginliği i
      le de dikkat çeken Eymir Gölü'nde kürek veya kano takımları da yıl boyu çalışmalar yapıyor.</p>
    </div>
  </div>
    </div>
    <div class="col-sm-4 col-md-4 mt-4">
    <div class="card" style="width: 100%;">
    <img src="IMG/Şehrim/atakule.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Atakule</h5>
      <p class="card-text">Ankara'nın modern simgelerinden biri olan Atakule, Çankaya semtinde hemen dikkatini
      zi çekecek. 1987 yılında yapımına başlayan ve 1989 yılında tamamlanan Atakule’nin içerisind
      eki alışveriş merkezi, sinema salonları, kafeler, seyir terasları ve kule bölümündeki döner restoran
      , her yıl binlerce kişi tarafından ziyaret ediliyor. Ankara’nın en güzel manzaraları karşısında roman
      tik akşam yemekleri tadabileceğiniz Atakule’nin seyir alanlarında da şehrin en iyi panoramik fotoğraflarını ç
      ekebilirsiniz. Atakule; Cinnah Caddesi, Çankaya Caddesi ve Zübeyde Hanım Meydanı arasında, toplu taşıma araçl
      arıyla kolayca ulaşabileceğiniz güzel bir konumda yer alıyor.</p>
    </div>
  </div>
    </div>
    </div>
    <div class="row mt-3">
    <div class="col-sm-4 col-md-4 mt-4">
    <div class="card" style="width: 100%;">
    <img src="IMG/Şehrim/segmenler-parki.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Seymenler Parkı</h5>
      <p class="card-text">Çankaya Köşkü'ne yakın bir konumda, Atatürk Bulvarı ve İran Caddesi arasınd
      a yemyeşil bir yeşil alan olan Seymenler Parkı, 67.000 m2 toplam büyüklüğe sahip. 171 m2 çocuk oyun 
      alanı ve 46.418 m2 çim alanıyla Ankara'nın o
      ksijen depolarından biri olan Seymenler Parkı, günün her saati oldukça hareketli.</p>
    </div>
  </div>
    </div>
    <div class="col-sm-4 col-md-4 mt-4">
    <div class="card" style="width: 100%;">
    <img src="IMG/Şehrim/kuğulupark.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Kuğulu Park</h5>
      <p class="card-text">Ankara'da Çankaya ilçesindeki Kavaklıdere semtinde yer alan ve şehrin en popüle
      r gezi alanlarından biri olan Kuğulu Göl, adını aldığı sevgili kuğuları ile ünlü. Özellikle çocuklu aileler için ço
      k eğlenceli bir gezi sunan Kuğulu Göl’de kuğuların y
      anı sıra ördekler, kazlar ve onlar kuş çeşidi arasında keyifli bir gezinti yapabilirsiniz.</p>
    </div>
  </div>
    </div>
    <div class="col-sm-4 col-md-4 mt-4">
    <div class="card" style="width: 100%;">
    <img src="IMG/Şehrim/kızılay.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Kızılay Meydanı</h5>
      <p class="card-text">Sadece Ankara'nın değil Türkiye'nin de en bilinen ve hareketli meydanlarından biri o
      lan Kızılay Meydanı, ismini 1929 yılında bölgede bulunan Kızılay merkezinden alıyor. Başkent Ankara’nın 
      kent merkezi olan Kızılay Meydanı; doğusunda Ziya Gökalp Caddesi, batısında Gazi Mustafa Kemal 
      Bulvarı ve kuzeyinde ise Atatürk Bulvarı ile oldukça merkezi bir konumda.</p>
    </div>
  </div>
    </div>
    </div>
    `
    item.innerHTML=gezilcekyerler
}
function tarihiyerler(){
    let tarihiyer=`<h1>TARİHİ YERLER</h1>
    <div class="row mt-3">
    <div class="col-sm-6 col-md-6">
      <img style="width:100%" src="IMG/Şehrim/anıtkabir.jpg" alt="">
    </div>
    <div class="col-sm-6 col-md-6">
        <h1>Anıtkabir</h1>
      <p>Anıtkabir, Türkiye'nin başkenti Ankara'nın Çankaya ilçesinde yer alan Mustafa Kemal Atatürk'ün anıt mezarını içeren komplekstir. 
      Emin Onat ile Orhan Arda'nın tasarımı olan yapı kompleksinin 1944'te başlanan inşası 1953'te tamamlanmıştır.
      <a href="https://tr.wikipedia.org/wiki/An%C4%B1tkabir" target="_blank">devam</a>
      </p>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-sm-6 col-md-6">
    <h1>Ankara Kalesi</h1>
    <p>Ankara Kalesi, Ankara'nın Altındağ ilçesinde bulunan tarihi bir kale.
     Ne zaman yapıldığı kesin olarak bilinmemekle birlikte MÖ 5. yüzyıl başında Galatların 
     Ankara'ya yerleşmeleri sırasında kalenin var olduğu bilinmektedir. Romalılar, Bizanslılar, 
     Selçuklu Hanedanı ve Osmanlılar dönemlerinde birçok kez onarımdan geçmiştir. Ankara Kalesi dışarıdan görümüne göre daha büyüktür. 
    Her yıl çeşitli festivallere de ev sahipliği yapmaktadır.
    <a href="https://tr.wikipedia.org/wiki/Ankara_Kalesi" target="_blank">devam</a></p>
    </div>
    <div class="col-sm-6 col-md-6">
    <img style="width:100%" src="IMG/Şehrim/ankarakalesi.jpg" alt="">
    </div>
  </div>
  
  <div class="row mt-5">
  <div class="col-sm-6 col-md-6">
    <img style="width:100%" src="IMG/Şehrim/hamamönü.jpg" alt="">
 </div>
     <div class="col-sm-6 col-md-6">
      <h1>Hamamönü</h1>
     <p>Hamamönü, Ankara ilinin Altındağ ilçesinde bulunan tarihi bir bölgedir. Hacettepe Mahallesi sınırlarında kalır.
      Bölgede bulunan 19. yüzyıl sivil mimarlık örneği tarihi binalar restore edilerek bölge yeniden canlandırılmıştır
       Hamamönü, adını bir Türk boyu olan Oğuzların Bayındır boyu beylerinden Karacabey’in yaptırdığı Çifte Hamamdan almıştır.
        Tarihi Karacabey Hamamı burada bulunmaktadır. 
     İstiklal Marşı’nın yazıldığı Mehmet Akif Ersoy Parkı ve parkın içerisinde Mehmet Akif Ersoy Müze Evi yer almaktadır.
     <a href="https://tr.wikipedia.org/wiki/Hamam%C3%B6n%C3%BC,_Alt%C4%B1nda%C4%9F" target="_blank">devam</a>
     </p>
     </div>
    </div>

    <div class="row mt-5">
    <div class="col-sm-6 col-md-6">
    <h1>Roma Hamamı</h1>
    <p>Ankara Roma Hamamı, Ankara'nın Altındağ ilçesinin Ulus Meydanı'ndan Yıldı
    rım Beyazıt Meydanı'na uzanan Çankırı Caddesi üzerinde yer almaktadır. 3. yüzyıld
    a Septimius Severus'un oğlu Roma İmparatoru Caracalla tarafından Sağlık Tanrısı Asklep
    ios adına yapılmıştır.[2][3][4][5] Parasal desteği kentin zenginlerinden Tiberius Iulius 
    Iustinianus sağlamıştır.[6] Bugün Roma Hamamı olarak adlandırılan bu platformun bir höyük old
    uğu, en üstte Roma Çağı (Kısmen Bizans ve Selçuk katları), 
    onun altında Frig Devri yerleşmesinin kalıntıları tespit edilmiştir.
    <a href="https://tr.wikipedia.org/wiki/Ankara_Roma_Hamam%C4%B1" target="_blank">devam</a></p>
    </div>
    <div class="col-sm-6 col-md-6">
    <img style="width:100%" src="IMG/Şehrim/romahamamı.jpg" alt="">
    </div>
  </div>
    `
    item.innerHTML=tarihiyer
}
function muze(){
  let muze=`
    <h1>Müzeler</h1>
    <div class="row">
    <div class="col-sm-6 col-md-6 mt-4">
     <div class="card" style="width:100%;">
       <img src="IMG/Şehrim/anadolumedeniyetlerimuze.jpg" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">Anadolu Medeniyetleri Müzesi</h5>
         <p class="card-text">Anadolu Medeniyetleri Müzesi; Ankara'nın Altındağ ilçesinde bulunan bir tarih ve arkeoloji müzesidir. Müzede,
          Anadolu'da yaşamış olan uygarlıklardan geriye kalan arkeolojik eserler kronolojik olarak sergilenmektedir.</p>
         <a href="https://tr.wikipedia.org/wiki/Anadolu_Medeniyetleri_M%C3%BCzesi" target="_blank" class="btn btn-danger">Daha Fazla</a>
       </div>
     </div>
    </div>
    <div class="col-sm-6 col-md-6 mt-4">
    <div class="card" style="width: 100%;">
     <img src="IMG/Şehrim/etnoğrafya.jpg" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Etnoğrafya Müzesi</h5>
       <p class="card-text">Ankara Etnografya Müzesi, Ankara'nın Altındağ ilçesinde bulunmaktadır. Kurtuluş Savaşı'nda cuma namazlarının kılındığı eski adı Namazgâh Tepesi olan yerde kuruldu.[3] Önceleri Arkeoloji Müzesi olarak kullanılması düşünülmüş,
        sonra Resim Heykel Müzesi olmasına karar verilmiş, açılış töreninden sonra bugünkü işlevine kavuşmuştur.</p>
       <a href="https://tr.wikipedia.org/wiki/Ankara_Etnografya_M%C3%BCzesi" class="btn btn-danger" target="_blank">Daha Fazla</a>
     </div>
   </div></div>
  </div>
  <div class="row mt-5">
  <div class="col-sm-6 col-md-6 mt-4">
   <div class="card" style="width:100%;">
     <img src="IMG/Şehrim/1.tbmm.jpg" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Kurtuluş Savaşı Müzesi (I. TBMM Binası)</h5>
       <p class="card-text">I. TBMM Binası, 1920-1924 yılları arasında TBMM faaliyetlerinin gerçekleştirildiği bina. 
       Ankara'nın Altındağ ilçesinin Ulus Meydanı'nda bulunan
        I. Türkiye Büyük Millet Meclisi binasının inşaasına, 1915 yılında başlanmıştır.</p>
       <a href="https://tr.wikipedia.org/wiki/Kurtulu%C5%9F_Sava%C5%9F%C4%B1_M%C3%BCzesi" class="btn btn-danger" target="_blank">Daha Fazla</a>
     </div>
   </div>
  </div>
  <div class="col-sm-6 col-md-6 mt-4">
  <div class="card" style="width: 100%;">
   <img src="IMG/Şehrim/AnkaraRahmiKocMuzesi.jpg" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">Rahmi M. Koç Müzesi Ankara</h5>
     <p class="card-text">Çengelhan Rahmi M. Koç Müzesi, Ankara'nın Altındağ ilçesinde bulunmaktadır.
      Ankara'nın ilk sanayi müzesidir. Ankara Kalesi'nin ana giriş kapısının karşısında, eskiden
      At Pazarı olarak bilinen mevkide yer alan Çengel Han adlı tarihi kervansarayda yer alır.</p>
     <a href="https://tr.wikipedia.org/wiki/%C3%87engelhan_Rahmi_M._Ko%C3%A7_M%C3%BCzesi" target="_blank" class="btn btn-danger">Daha Fazla</a>
   </div>
 </div></div>
</div>
<div class="row mt-5">
<div class="col-sm-6 col-md-6 mt-4">
 <div class="card" style="width:100%;">
   <img src="IMG/Şehrim/ulucanlar.jpg" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">Ulucanlar Cezaevi Müzesi</h5>
     <p class="card-text">Ankara Merkez Kapalı Ceza ve Tutukevi veya Ulucanlar Cezaevi, 1925 ve 2006 yılları arasında 
     Ankara'nın Altındağ ilçesinin Ulucanlar semtinde faaliyet göstermiş olan bir cezaevidir.</p>
     <a href="https://tr.wikipedia.org/wiki/Ulucanlar_Cezaevi_M%C3%BCzesi" target="_blank" class="btn btn-danger">Daha Fazla</a>
   </div>
 </div>
</div>
<div class="col-sm-6 col-md-6 mt-4">
<div class="card" style="width: 100%;">
 <img src="IMG/Şehrim/pttpul.jpg" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">PTT Pul Müzesi</h5>
   <p class="card-text">PTT Pul Müzesi; Ankara'nın Altındağ ilçesinde bulunan bir müzedir. Müzenin açılışı 2013 yılının Ekim ayında yapılmıştır. Müze koleksiyonunda; 4400 parça orijinal pul ve 
   dünyanın çeşitli ülkelerinden derlenmiş 1500 parça, toplamda yaklaşık 6000 kadar pul bulunmaktadır.</p>
   <a href="https://tr.wikipedia.org/wiki/PTT_Pul_M%C3%BCzesi" target="_blank" class="btn btn-danger">Daha Fazla</a>
 </div>
</div></div>
</div>

  `
  item.innerHTML=muze
}

function genel(){
  let genelbilgiler=`
  <div class="row">
  <h1>Ankara</h1>
  <div class="col-sm-3 col-md-3">
  <table>
  <tr>
    <td><b>Ülke</b></td>
    <td>:</td>
    <td>Türkiye</td>
  </tr>
  <tr>
   <td><b>Coğrafi Bölge</b></td>
   <td>:</td>
   <td>İç Anadolu Bölgesi</td>
 </tr>
 <tr>
   <td><b>İlk Yerleşim</b></td>
   <td>:</td>
   <td>MÖ.3000</td>
 </tr>
 <tr>
   <td><b>Belediye Başkanı</b></td>
   <td>:</td>
   <td> Mansur Yavaş</td>
 </tr>
 <tr>
   <td><b>Rakım</b></td>
   <td>:</td>
   <td>938m</td>
 </tr>
 <tr>
   <td><b>Nüfus</b></td>
   <td>:</td>
   <td>5.747.325</td>
 </tr>
</table>

  </div>
  <div class="col-sm-9 col-md-9">  <img src="IMG/Şehrim/külliye.jpg" class=" w-100 img-fluid rounded" alt="..."></div>
</div>
  `
  item.innerHTML=genelbilgiler
}