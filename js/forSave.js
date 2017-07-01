/**
 * Created by Noom on 2017/6/25 0025.
 */
$(function () {
    var a = location.search;
    getNum(a);

    $.ajax({
        url:'http://127.0.0.1:3000/api/getmoneyctrlproduct',
        dataType:'json',
        data:{productid:value},
        success: function (data) {
            var html = template('noom',data);
            //console.log(html);
            $('.content').html(html);
        }
    })

    /**
     * 从字符串中提取数字
     * @param text
     * @returns {void|string|XML}
     */
    function getNum(text) {
        return value = text.replace(/[^0-9]/ig, "");
    }
})