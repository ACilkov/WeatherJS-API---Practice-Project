class Weather {
    constructor(city, country) {
        this.apiKey = '22f354f8b360f9c1d8ca340ae08acce3';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // Change location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}