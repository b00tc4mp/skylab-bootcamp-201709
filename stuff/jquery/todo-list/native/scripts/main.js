document.getElementsByTagName('form')[0].addEventListener('submit', function (event) {
    event.preventDefault();

    var input = document.getElementsByTagName('input')[0];
    var todo = input.value;

    if (todo) {
        var ul = document.getElementsByTagName('ul')[0];
        var li = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var a = document.createElement('a');

        a.href = '#';
        a.appendChild(document.createTextNode('\u2713'));
        // a.addEventListener('click', function(event) {
        //     this.parentNode.remove();
        // });

        li.appendChild(todoText);
        li.appendChild(a);
        ul.appendChild(li);

        input.value = '';
    }
});

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A')
        event.target.parentNode.remove();
});