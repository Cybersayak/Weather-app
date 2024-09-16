document.getElementById('search').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'a8c58f7262d7591c7a79e1d990bcad46'; // Replace with your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(apiUrl); // Log the API URL for inspection

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            document.getElementById('city-name').innerText = "City not found";
            document.getElementById('temperature').innerText = "";
            document.getElementById('description').innerText = "";
            console.error('Error:', error);
        });
});