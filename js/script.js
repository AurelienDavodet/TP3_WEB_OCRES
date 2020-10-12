
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDayForecast(){

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast
  
  apiWeather
    .fetchThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      //boucle qui permet d'afficher les 3 premiers jours
      for(let i=1; i<4; i++)
      {
        // On récupère l'information principal
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        
        if(i==1){
          document.getElementById('demain-forecast-main').innerHTML = main;
          document.getElementById('demain-forecast-more-info').innerHTML = description;
          document.getElementById('icon2-weather-container').innerHTML = icon;
          document.getElementById('demain-forecast-temp').innerHTML = `${temp}°C`;
        }
        else if(i==2){
          document.getElementById('apdemain-forecast-main').innerHTML = main;
          document.getElementById('apdemain-forecast-more-info').innerHTML = description;
          document.getElementById('icon3-weather-container').innerHTML = icon;
          document.getElementById('apdemain-forecast-temp').innerHTML = `${temp}°C`;
        }
        else {
          document.getElementById('eapdemain-forecast-main').innerHTML = main;
          document.getElementById('eapdemain-forecast-more-info').innerHTML = description;
          document.getElementById('icon4-weather-container').innerHTML = icon;
          document.getElementById('eapdemain-forecast-temp').innerHTML = `${temp}°C`;
        }
      }
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

