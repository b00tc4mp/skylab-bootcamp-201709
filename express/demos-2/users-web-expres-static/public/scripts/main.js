var url = 'http://192.168.0.13:3000';

$('#list-users').click(function() {
    listUsers();
});

function listUsers() {
	$.ajax({
            url: url + '/list-users'
        })
        .then(function(res) {
        	var users = res.data;

        	var $usersList = $('#users-list');

        	$usersList.empty();

        	users.forEach(function(user) {
        		$usersList.append('<li><a href="#" onClick="showEdit(' + user.id + ', \'' + user.username + '\')">' + user.username + '</a></li>');
        	});
        })
        .catch(console.error)
}

$('#create-user').submit(function(event) {
    event.preventDefault()

    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
            url: url + '/create-user',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({ 
            	username: username, 
            	password: password 
            })
        })
        .then(console.log)
        .catch(console.error);
});

var $userEdit = $('#user-edit');
$userEdit.hide();

var $idEdit = $('#id-edit');
var $idDelete = $('#id-delete');
var $usernameEdit = $('#username-edit');

function showEdit(id, username) {
	$idEdit.val(id);
	$usernameEdit.val(username);

	$idDelete.val(id);

	$userEdit.show();
}

$userEdit.submit(function(event) {
	event.preventDefault();

	var id = $idEdit.val();
	var username = $usernameEdit.val();
	var password = $('#password-edit').val();

	if (!password)
		return alert('Insert password!');

	$.ajax({
            url: url + '/update-user',
            type: 'put',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({ 
            	id: id,
            	username: username, 
            	password: password 
            })
        })
        .then(function() {
        	listUsers();
        })
        .catch(console.error);
});

var $deleteUser = $('#delete-user-button');
$deleteUser.click(function(event) {
	event.preventDefault();

	var id = $idDelete.val();

	if (confirm('Do you really want to delete this user?'))
		$.ajax({
	            url: url + '/delete-user',
	            type: 'delete',
	            dataType: 'json',
	            contentType: 'application/json',
	            data: JSON.stringify({
	            	id: id
	            })
	        })
	        .then(function() {
	        	listUsers();
	        })
	        .catch(console.error);
})
