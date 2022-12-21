const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79b78c6fb1msh8bc95c3d99c12ebp1cdbcfjsna729df012606',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));