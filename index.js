var buttonElement = document.getElementById('button');
var jokeText = document.getElementById('joke-text');

function onClick ()
{
    // Call API
    const URL =  'https://icanhazdadjoke.com/';
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch(URL, options)
        .then(response => response.json())
        .then(responseData => jokeText.innerText = responseData.joke);
    
}

buttonElement.addEventListener('click', onClick);