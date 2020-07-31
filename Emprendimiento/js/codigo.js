$(document).ready(function(){
    consultaAPI();
});

function consultaAPI(){
    const covid = "https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/6/query?where=1%3D1&outFields=TOTAL_CASOS&outSR=4326&f=json"

    $.get( covid, function (data) {
        consulta = data;
        console.log(consulta);

    

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