/**
 * Created by Noom on 2017/6/28 0028.
 */
$(function () {
    var hanzi = decodeURI(location.search);
    var shanzi = hanzi.split('=')[1];
    getNum(shanzi);
    var valueH = hanzi.split('=')[hanzi.split('=').length - 1];
    var name = valueH.substr(0,valueH.length - 4);
    $('.content>div:nth-of-type(1)>a:nth-of-type(3)').html(name + '哪个牌子好');
    $.ajax({
        url:'http://127.0.0.1:3000/api/getbrand',
        dataType:'json',
        data:{brandtitleid:value},
        success: function (data) {
            $.each(data.result, function (i,v) {
                v.name = name;/*精彩*/
            })
            console.log(data);
            var html = template('noom',data);
            $('.bigUL').html(html);

            /*动态添加数字*/
            var spans = $('.bigUL>li span');
            $.each(spans, function (i,v) {
                $(v).html(i+1);
            });
            $('.six').html(name + '哪个牌子好');
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