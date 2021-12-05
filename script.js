fetch('https://reqres.in/api/users')
    .then(res => console.log(res))

fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => console.log(data))

fetch('https://reqres.in/api/users/2')
    .then(res => res.json())
    .then(data => console.log(data))

// User does not exist
fetch('https://reqres.in/api/users/23')
    .then(res => res.json())
    .then(data => console.log(data))

/* 404 being returned, we would think that sense of 404 is an error that it would end up in a
    catch statement.
*/
fetch('https://reqres.in/api/users/23')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error'))
/* we can see that we're not getting any error text and that's because the way fetch works 
even though we're getting a 404 response which is a failure of a response.
 
Fetch always suceeds no matter what unless there's some networks error where the actual 
browser has a hard time connecting to the internet, the only time we're going to get a 
failure is if we have the failure with fetch itself and not with the API we are calling
*/


// so we need to do
fetch('https://reqres.in/api/users/23')
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS")
            return res.json()
        } else {
            console.log("not successful")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error'))



// option section of fetch
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error'))
    /*
the body need to sent up correctly the way that fetch works is you actaully
need to send it JSON so you need to do JSON.stringify and actually stringify
the object that you're passing it.

remember when doing anything with JSON data that you're posting to the server
is you need to make sure you set the header to the correct Content-Type of
application/json and you also need to stringify the body so you can't just send
a Javascript object.
*/