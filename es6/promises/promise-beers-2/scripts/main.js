var $spinner = $('img')
$spinner.hide()

$('button').click(function () {
    $spinner.show()

    searchBeers('mahou')
        .then(function(result) {
            $spinner.hide()
            console.log('OK')
        })
        .catch(function(err) {
            $spinner.hide()
            console.error('KO')
        })
})