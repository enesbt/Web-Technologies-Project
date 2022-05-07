const ApiKey= 'api_key=a2d95927f80e594a299672c047cc1c16';
const BaseUrl="https://api.themoviedb.org/3" ;
const ApiUrl = BaseUrl+"/discover/tv?&"+ApiKey+"&with_networks=213"+"&language=tr-TR&include_image_language=en,null";
const imgUrl="https://image.tmdb.org/t/p/w500";
const film = document.querySelector('.film1');
const film2 =document.querySelector('.film2');
const film3 = document.querySelector('.film3');

getMovies(ApiUrl)
function getMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        showMovies(data.results);
        console.log(data.results)
    })
}
function showMovies(data){
    film.innerHTML="";
    data.forEach(movie => {
        const {name,vote_average,overview,poster_path} = movie;
        if(movie.name=="Vikings: Valhalla"){
        film.innerHTML=`
        <div class="card" style="width: 100%;">
        <img src="${imgUrl+poster_path}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p>Puan: ${vote_average}</p>
          <p class="card-text">${overview}</p>      
        `
       ;}
        if(movie.name=="Squid Game"){
        film2.innerHTML=`
        <div class="card" style="width: 100%;">
        <img src="${imgUrl+poster_path}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p>Puan: ${vote_average}</p>
          <p class="card-text">${overview}</p>  
        `
       ;}
       if(movie.name=="Ozark"){
        film3.innerHTML=`
        <div class="card" style="width: 100%;">
        <img src="${imgUrl+poster_path}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p>Puan: ${vote_average}</p>
          <p class="card-text">${overview}</p>  
        `
       ;}
    });
}

const ApiUrl2 =  BaseUrl+"/discover/movie?sort_by=popularity.desc&"+ApiKey+"&language=tr-TR&include_image_language=en,null";

const film4 = document.querySelector('.film4');
const film5 =document.querySelector('.film5');
const film6 = document.querySelector('.film6');

getMovies2(ApiUrl2)
function getMovies2(url){
    fetch(url).then(res=>res.json()).then(data2=>{
        showMovies2(data2.results);
        console.log(data2.results)
    })
}
function showMovies2(data2){
    data2.forEach(movie2 => {
        const {title,vote_average,overview,poster_path} = movie2;
        if(movie2.title=="The Outfit"){
        film4.innerHTML=`
        <div class="card" style="width: 100%;">
        <img src="${imgUrl+poster_path}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>Puan: ${vote_average}</p>
          <p class="card-text">${overview}</p>  
        `
       ;}
        if(movie2.title=="Moonfall"){
        film5.innerHTML=`
        <div class="card" style="width: 100%;">
        <img src="${imgUrl+poster_path}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>Puan: ${vote_average}</p>
          <p class="card-text">${overview}</p>  
        `
       ;}
       if(movie2.title=="Uncharted"){
        film6.innerHTML=`
        <div class="card" style="width: 100%;">
        <img src="${imgUrl+poster_path}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>Puan: ${vote_average}</p>
          <p class="card-text">${overview}</p>  
        `
       ;}
    });
}








