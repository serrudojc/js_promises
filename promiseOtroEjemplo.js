/*
fetch('https://swapi.dev/api/people/4')
    .then((data) =>  data.json())
    .then(response => {
        console.log(response);
    })
    .catch(err => console.log(err))
*/

fetch('https://swapi.dev/api/peop7le/4')
    .then(response => {
        if (!response.ok) throw Error("Ocurriò un error " + response.status);

        return response.json();
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
