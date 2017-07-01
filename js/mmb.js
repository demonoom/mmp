/**
 * Created by Noom on 2017/6/22 0022.
 */
$(function () {
    /*点击显示，隐藏*/
    var flag = true;
    $('.nav li:eq(7)').click(function () {
        if(flag) {
            $('.nav li:gt(7)').css({display:'block'});
            flag = false;
        }else {
            $('.nav li:gt(7)').css({display:'none'});
            flag = true;
        }
    })
    /*获取导航栏的数据*/
    $.ajax({
        url:'http://127.0.0.1:3000/api/getindexmenu',
        dataType:'json',
        success: function (data) {
            var navs = data.result;
            $('.nav p').each(function (i,v) {
                $(this).html(navs[i].name);
                $(this).before(navs[i].img);
            });
        }
    })
    /*获取商品栏的数据*/
    $.ajax({
        url:'http://127.0.0.1:3000/api/getmoneyctrl',
        dataType:'json',
        success: function (data) {
            var html = template('model',data);
            $('#productbox').append(html);
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
