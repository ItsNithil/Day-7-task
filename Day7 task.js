//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

//a)Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var data = result.filter((country)=> country.region==='Asia');
console.log('countries in asia:', data);

    }
//b)Get all the countries with a population of less than 2 lakhs using Filter function
   
    var request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.com/v3.1/all");
    request.send();
    request.onload = function(){
        var result = JSON.parse(request.response);
        var data = result.filter((country)=> country.population<200000);
    console.log('Countries with population less than 2 lakhs:', data);
    
        }

  //d)Print the total population of countries using reduce function
  
  var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var data = result.reduce((accumulator, country) =>country.population)
console.log('Total population of countries', data);

    }
//e)Print the country that uses US dollars as currency.
  var request = new XMLHttpRequest();
 request.open("GET", "https://restcountries.com/v3.1/all");
 request.send();
  request.onload = function () {
 var result = JSON.parse(request.response);
  var countryWithUSD = result.find(country => country.currencies && country.currencies.hasOwnProperty('USD'));
 
 if (countryWithUSD) {
 console.log('Country that uses US dollars:', countryWithUSD.name.common);
 } else {
 console.log('No country found that uses US dollars as currency.');
 }
 }


 