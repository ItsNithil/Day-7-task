//c)Print the following details name, capital, flag, using forEach function
async function fetchData() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 async function printDetailsForEach() {
    const data = await fetchData();
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg);
      console.log('---------------------------');
    });
  }
printDetailsForEach(); 