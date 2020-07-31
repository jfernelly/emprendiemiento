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

