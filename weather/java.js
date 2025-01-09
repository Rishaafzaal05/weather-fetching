function getweather()
{
    const pickcity_name =document.querySelector("#c1").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=c880038700d04713a4582932241912&q=${pickcity_name}&aqi=no`)
    
  .then(function (response) {
    // handle success
    console.log(response);
    var weathercard =(response.data.current)
    console.log(weathercard.temp_c)
    document.getElementById("res").innerHTML=(`Temerature of ${pickcity_name} is ${weathercard.temp_c}`)
  })
  .catch(function (error) {

  console.log(error)
    //handle error
  
  })
  .finally(function(){
    //always executed
  });

}