document.addEventListener('DOMContentLoaded', () => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');

    // Define content for each country
    const content = {
        italy: {
            name: 'Italy',
            info: 'Italy is famous for its art, cuisine, and stunning architecture.',
            background: 'url("italy.jpg")'
        },
        spain: {
            name: 'Spain',
            info: 'Spain is renowned for its vibrant festivals, delicious food, and rich history.',
            background: 'url("spain.jpg")'
        },
        germany: {
            name: 'Germany',
            info: 'Germany is known for its rich history, vibrant culture, and beautiful landscapes.',
            background: 'url("germany.jpg")'
        },
        france: {
            name: 'France',
            info: 'France is celebrated for its art, cuisine, and romantic ambiance.',
            background: 'url("france.jpg")'
        },
        austria: {
            name: 'Austria',
            info: 'Austria is known for its classical music heritage and picturesque landscapes.',
            background: 'url("austria.jpg")'
        },
        poland: {
            name: 'Poland',
            info: 'Poland is recognized for its medieval architecture and vibrant cultural heritage.',
            background: 'url("poland.jpg")'
        }
    };

    // Set default values if country is not found
    const selectedCountry = content[country] || {
        name: 'Unknown Country',
        info: 'No information available.',
        background: 'none'
    };

    // Update content based on the selected country
    const infoName = document.getElementById('country-name');
    const infoText = document.getElementById('country-info');
    infoName.textContent = selectedCountry.name;
    infoText.textContent = selectedCountry.info;
    document.body.style.backgroundImage = selectedCountry.background;
});