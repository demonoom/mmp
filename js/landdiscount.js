/**
 * Created by Noom on 2017/6/25 0025.
 */
$(function () {
    var len = 8;
    var winHeight,
        DOMHeight;
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getinlanddiscount',
        dataType: 'json',
        success: function (data) {
            var noom = data.result;
            var tag = '';
            for (i = 0; i < len; i++) {
                tag += '<a href="forlanddiscount.html?productId=' + noom[i].productId + '">'
                    + '<li>'
                    + noom[i].productImg
                    + '<h3>' + noom[i].productName + '</h3>'
                    + '<span>' + noom[i].productPrice + '</span><br/>'
                    + '<span>' + noom[i].productFrom + '|' + noom[i].productTime + '</span>'
                    + '</li>'
                    + '</a>'
            }
            $('.content').append(tag);
        }
    })

    /*设置事件*/
    $(window).scroll(function () {
        winHeight = $(window).height();//窗口高度
        DOMHeight = $(document).height();
        var WD = DOMHeight - winHeight;
        if ($(window).scrollTop() == WD) {
            if(len<20) {
                getmessage();
            }
        }
    })

    function getmessage() {
        $.ajax({
            url: 'http://127.0.0.1:3000/api/getinlanddiscount',
            dataType: 'json',
            success: function (data) {
                var noom = data.result;
                var tag = '';
                for (i = len; i < len + 4; i++) {
                    tag += '<a href="forlanddiscount.html?productId=' + noom[i].productId + '">'
                        + '<li>'
                        + noom[i].productImg
                        + '<h3>' + noom[i].productName + '</h3>'
                        + '<span>' + noom[i].productPrice + '</span><br/>'
                        + '<span>' + noom[i].productFrom + '|' + noom[i].productTime + '</span>'
                        + '</li>'
                        + '</a>'
                }
                $('.content').append(tag);
                len += 4;
            }
        })
    }
})



