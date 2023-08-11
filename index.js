const container = document.getElementById("weather");

// Oб'єкт XMLHttpRequest
const weatherRequest = new XMLHttpRequest();
weatherRequest.open(
  "GET",
  "http://api.openweathermap.org/data/2.5/weather?q=Odesa&units=metric&APPID=5d066958a60d315387d9492393935c19",
  true
);

weatherRequest.onload = function () {
  if (weatherRequest.status === 200) {
    const responseData = JSON.parse(weatherRequest.responseText);
    const { main, weather, wind } = responseData;
    const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

    // HTML для виведення погоди
    const weatherHtml = `
    <div>
      <img src="${iconUrl}" alt="Піктограма погоди">
      <p>Температура: ${main.temp} °C</p>
      <p>Тиск: ${main.pressure} гПа</p>
      <p>Опис: ${weather[0].description}</p>
      <p>Вологість: ${main.humidity}%</p>
      <p>Швидкість вітру: ${wind.speed} м/с</p>
      <p>Напрям вітру: ${wind.deg}°</p>
    </div>  
    `;

    container.innerHTML = weatherHtml;
  } else {
    alert("Помилка при отриманні погодних даних");
  }
};

weatherRequest.send();
