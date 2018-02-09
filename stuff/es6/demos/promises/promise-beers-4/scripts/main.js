var $spinner = $('img')
$spinner.hide()

const beersApi = new BeersApi()

$('button').click(function () {
    $spinner.show()

    // hey | estrella | mahou

    beersApi.searchBeers('hey')
        .then(function(result) {
            console.log('hey found!')
            $spinner.hide()
            console.log('OK')
        })
        .catch(function(err) {
            $spinner.hide()
            console.error('KO')
        })

    beersApi.searchBeers('mahou')
        .then(function(result) {
            console.log('mahou found!')
        })
        .catch(function(err) {
            $spinner.hide()
            console.error('KO')
        })

    beersApi.searchBeers('estrella')
        .then(function(result) {
            console.log('estrella found!')
        })
        .catch(function(err) {
            $spinner.hide()
            console.error('KO')
        })

    // mahou > estrella > hey
    // searchBeers('mahou')
    //     .then(function(result) {
    //         console.log('mahou found!')
    //         searchBeers('estrella')
    //             .then(function(result) {
    //                 console.log('estrella')
    //                 searchBeers('hey')
    //                     .then(function(result) {
    //                         console.log('hey')
    //                         $spinner.hide()
    //                         console.log('OK')
    //                     })
    //                     .catch(function(err) {
    //                         $spinner.hide()
    //                         console.error('KO')
    //                     })
    //             })
    //             .catch(function(err) {
    //                 $spinner.hide()
    //                 console.error('KO')
    //             })
    //     })
    //     .catch(function(err) {
    //         $spinner.hide()
    //         console.error('KO')
    //     })


})