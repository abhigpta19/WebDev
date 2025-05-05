const apiKey = "YOUR_API_KEY_HERE"; // <-- Replace with your API key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (city === "") {
    resultDiv.innerHTML = "Please enter a city name!";
    return;
  }

  resultDiv.innerHTML = "Fetching weather data...";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const { name, main, weather } = data;
    const weatherDesc = weather[0].description;
    const temp = main.temp;

    resultDiv.innerHTML = `
      <h2>📍 ${name}</h2>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>☁️ Weather: ${weatherDesc}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `❌ Error: ${error.message}`;
  }
}
