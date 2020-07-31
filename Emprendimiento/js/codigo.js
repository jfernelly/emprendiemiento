$(document).ready(function(){
    consultaAPI();
});

function consultaAPI(){
    const covid = "https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/6/query?where=1%3D1&outFields=TOTAL_CASOS,FECHA_ACTUALIZACION&outSR=4326&f=json"

    $.get( covid, function (data) {
        consulta = data;
        console.log(consulta);
        personajes.forEach(element => {

    

    });
}




/* Carrusel Clientes */

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})




/* Efecto Scroll */
ScrollReveal().reveal('.navbar', {
    distance: '100%',
    origin: 'top',
  });
  

  ScrollReveal().reveal('.barra', {
    distance: '100%',
    origin: 'top',
  });

  ScrollReveal().reveal('.nosotros', {
    distance: '100%',
    origin: 'bottom',
    delay: 600,
  });
  

  ScrollReveal().reveal('#iluminacion', {
    distance: '100%',
    origin: 'left',
    delay: 600,
  });

  ScrollReveal().reveal('#mobiliario', {
    distance: '100%',
    origin: 'right',
    delay: 600,
  });

  ScrollReveal().reveal('#cocina', {
    distance: '100%',
    origin: 'left',
    delay: 800,
  });

  ScrollReveal().reveal('#interior', {
    distance: '100%',
    origin: 'right',
    delay: 800,
  });
  
