$(function () {
    $.ajax({
        url:'http://127.0.0.1:3000/api/getbrandtitle',
        dataType:'json',
        success: function (data) {
            console.log(data);
            var html = template('noom',data)
            $('.bigUL').html(html);
        }
    })
})