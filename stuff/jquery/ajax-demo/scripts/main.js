var params = {
    url: 'data/employees.json',
    dataType: 'json',
    success: onSuccess,
    error: onError
}

$('button').click(function() {
    $.ajax(params);
});

function onSuccess(results) {
    if(results.length) {
        var ul = $('ul');

        results.forEach(function(item) {
            ul.append('<li>' + item.id + ' ' + item.first_name + '</li>');
        });
    }
}

function onError(err) {
    console.error(err);
}