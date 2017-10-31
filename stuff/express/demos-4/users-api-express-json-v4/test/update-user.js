const axios = require('axios')

const url = 'http://192.168.0.13:3000'

axios.post(url + '/create-user', {
        username: 'fulanito-' + new Date().getTime(),
        password: '1234'
    })
    .then(({data}) => {
    	console.log(data)

    	return axios.get(url + '/retrieve-user/' + data.data.id)
    })
    .then(({data}) => {
    	return axios.put(url + '/update-user', {
    		id: data.data.id,
    		username: data.data.username + '-1'
    	})
    })
    .then(console.log)
    .catch(console.error)