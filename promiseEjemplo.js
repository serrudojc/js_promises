// egg
// fetching data from a server using a promise
/*
Promises Exercise

Complementary Practice
For this practice, we are going to create a simple promise-based that simulates fetching data 
from a server using a promise, taking into account the following instructions:

1- We need to define a function named fetchData that takes a parameter url, representing the URL 
from which to fetch data.

2- Once the fetchData function is created, we create a new promise and within its constructor we
 use the setTimeout function to simulate a delay of 2 seconds..

3- After the delay, let's randomly resolve the promise with a mock data object or reject it with
 a mock error object.

4- Outside the Promise constructor, return the created promise.

5- Finally, let’s call the fetchData function with a URL and handle both the resolved and rejected
 cases using .then() and .catch().

 The URL, and the mock data can be defined with an API URL, as https://swapi.dev/ , optionally,
 add the use of a library like Axios, or Chai HTTP, to successfully retrieve the data via API services.
*/

function fetchData(url) {
    const dataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random();

            if (randomValue > 0.5) {
                const mockData = { message: 'Data fetched successfully!' };
                resolve(mockData);
            } else {
                const mockError = { error: 'Error fetching data!' };
                reject(mockError);
            }
        }, 2000);
    });

    return dataPromise;
}

fetchData('https://swapi.dev/api/people/3')
    .then((data) => {
        console.log('Resolved:', data);
    })
    .catch((error) => {
        console.log('Rejected:', error);
    });
