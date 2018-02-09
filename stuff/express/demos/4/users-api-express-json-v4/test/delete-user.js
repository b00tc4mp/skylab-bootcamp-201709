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
    .then(({data}) => {
    	return axios.delete(url + '/delete-user', {
    		data: { id: data.data.id }
    	})

    	// const rp = require('request-promise')

  //   	return rp({
		// 	method: 'DELETE',
		// 	uri: url + '/delete-user',
		// 	body: {
		// 		id: data.data.id
		// 	},
		// 	json: true
		// })
    })
    .then(console.log)
    .catch(console.error)