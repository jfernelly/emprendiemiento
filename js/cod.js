const url = "https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json"

$.get(url, function (data) {
        const pages = data;
        console.log(data)

    

    });