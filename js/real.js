/**
 * Created by Noom on 2017/6/28 0028.
 */
$(function () {
    var num = location.search;
    getNum(num);
    $.ajax({
        url:'http://127.0.0.1:3000/api/getproductcom',
        dataType:'json',
        data:{productid:value},
        success: function (data) {
            console.log(data);
            var html = template('noom',data);
            $('.bigUL').html(html);
        }
    });




    /**
     * 从字符串中提取数字的方法
     * @param text
     */
    function getNum(text) {
        return value = text.replace(/[^0-9]/ig, "");
    }
})