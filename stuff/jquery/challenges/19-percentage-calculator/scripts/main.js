var f1Wrong = $('#helpBlock1');
f1Wrong.hide();

$('#f1').submit(function (event) {
    event.preventDefault();

    var percentage = parseFloat($('#f1-a').val());
    var target = parseFloat($('#f1-b').val());

    if (!isNaN(percentage) && !isNaN(target)) {
        var result = (percentage / 100) * target;

        $('#f1-result').val(result);
    } else {
        f1Wrong.show();
    }
});