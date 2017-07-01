/**
 * Created by Noom on 2017/6/26 0026.
 */
$(function () {
    $.ajax({
        url:'http://127.0.0.1:3000/api/getcoupon',
        dataType:'json',
        success: function (data) {
            console.log(data);
            var html = template('noom',data);
            $('.content').html(html);
        }
    })

})