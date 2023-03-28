$(document).ready(function () {
	$("#awesomeButton").on("click", function () {
		navigator.geolocation.getCurrentPosition(getRecommendations);
	});
});

function getRecommendations(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const apiKey = "fsq3NBtkMpJ5bcua9XarNbDIWVIMjWd3OM6LG0V078IT2O8=";
	const apiUrl = `https://api.foursquare.com/v3/places/nearby?lat=${lat}&lon=${lon}&apikey=${apiKey}`;

	$.getJSON(apiUrl, function (data) {
		const recommendations = data.recommendations;
		let listItems = "";

		recommendations.forEach(function (recommendation) {
			listItems += `
			<li>
				<a href="${recommendation.url}" target="_blank">${recommendation.title}</a>
			</li>
			`;
		});

		$("#recommendations").html(listItems);
	});
}
