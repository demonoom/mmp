/**
 * Created by Noom on 2017/6/22 0022.
 */
$(function () {
    /*�����ʾ������*/
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
    /*��ȡ������������*/
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
    /*��ȡ��Ʒ��������*/
    $.ajax({
        url:'http://127.0.0.1:3000/api/getmoneyctrl',
        dataType:'json',
        success: function (data) {
            var html = template('model',data);
            $('#productbox').append(html);
        }
    });
    /**
     * ���ַ�������ȡ���ֵķ���
     * @param text
     */
    function getNum(text) {
        return value = text.replace(/[^0-9]/ig, "");
    }
})
