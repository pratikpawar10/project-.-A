const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '92a8436d85msh5b8b032967b7681p14474cjsnfe653846a0be',
		'x-rapidapi-host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}