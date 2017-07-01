/**
 * Created by Noom on 2017/6/28 0028.
 */
$(function () {
    var num = decodeURI(location.search).split('&')[0];
    var str = decodeURI(location.search).split('&')[1].split('=')[1]
    getNum(num);
    $('.six').html(str+'产品销量排行榜');
    $.ajax({
        url:"http://127.0.0.1:3000/api/getbrandproductlist",
        dataType:'json',
        data:{brandtitleid:value/*,pagesize:6*/},
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
    /**
     * 从字符串中提取汉字的方法
     * @param text
     * @returns {void|string|XML}
     */
    function getHan(text) {
        return valueH = text.replace(/[^\u4e00-\u9fa5]/g, "");
    }
})