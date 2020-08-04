$(document).ready(function(){
    consultaAPI();
});






/* Carrusel Clientes */

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
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

  ScrollReveal().reveal('.alerta', {
    distance: '100%',
    origin: 'top',
  });


  function consultaAPI(){
    const covid = 'https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/6/query?where=1%3D1&outFields=TOTAL_CASOS,FECHA_ACTUALIZACION,TOTAL_RECUPERADOS,NUEVOS_CASOS&outSR=4326&f=json&t='+Date.now();

    $.get( covid, function (data) {
        casos = JSON.parse(data) //de JSON a objeto
        console.log(casos.features[casos.features.length - 1].attributes);
        $('#iContagios').text(casos.features[casos.features.length - 1].attributes.TOTAL_CASOS);
        $('#iRecuperados').text(casos.features[casos.features.length - 1].attributes.TOTAL_RECUPERADOS);
        $('#iNuevosCasos').text(casos.features[casos.features.length - 1].attributes.NUEVOS_CASOS);
        //console.log(data);
        
        //console.log(data.features[0].attributes.TOTAL_CASOS);   
        //console.log(data.features.attributes.TOTAL_CASOS.pop());
        //arreglo = data.features; 
        //console.log(arreglo)
        /*

        for(var i = 0; i < arreglo.length; i++) {
            console.log(arreglo[i])
        }*/

        /*
            const covid = 'https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/6/query?where=1%3D1&outFields=TOTAL_CASOS,FECHA_ACTUALIZACION&outSR=4326&f=json&t='+Date.now();
            */
    });
}
  
