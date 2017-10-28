const url = 'http://192.168.0.13:3000'

const axios = require('axios')

axios.post(url + '/create-user', {
        username: 'fulanito',
        password: '1234'
    })
    .then(console.log)
    .catch(console.error)

// ...

const request = require('request')

request({
    method: 'POST',
    uri: url + '/create-user',
    body: {
        username: "mauro",
        password: "pupiguay"

    },
    json: true
}, (error, response, body) => {
    if (error) {
        return console.error('Upload failed:', error);
    }
    console.log('Upload successful!  Server responded with:', body);
});

// ...

const rp = require('request-promise')

rp({
	method: 'POST',
	uri: url + '/create-user',
	body: {
		username: 'manuel',
		password: 123
	},
	json: true
})
.then(console.log)
.catch(console.err)












