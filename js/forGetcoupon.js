/**
 * Created by Noom on 2017/6/27 0027.
 */
$(function () {
    /*获取地址后面传过来的ID*/
    var hanzi = decodeURI(location.search);
    getNum(hanzi);//这个函数的返回值value就是ID值
    var valueH =  getHan(hanzi);//这个函数的返回值valueH就是汉字
    valueH += '优惠劵'
    $('.banner').append(valueH);


    $.ajax({
        url: 'http://127.0.0.1:3000/api/getcouponproduct',
        dataType: 'json',
        data: {couponid: value},
        success: function (data) {
            var html = template('noom',data);
            $('.content').append(html);
            $('.content>.mask').click(function () {
                $('.shade').css('display','block');
                $('.shade .left').after(data.result[$(this).index() - 1].couponProductImg);
                return index = $(this).index() - 1;
            });
            $('.middle').click(function () {
                event.stopPropagation();/*阻止事件冒泡*/
            });
            $('.shade').click(function () {
                $('.shade').css('display','none');
                $('.shade img').remove();
            })

            $('.shade .right').click(function () {
                if(index<data.result.length-1) {
                    index++;
                    $('.shade img').remove();
                    $('.shade .left').after(data.result[index].couponProductImg);
                }
            });
            $('.shade .left').click(function () {
                if(index>0) {
                    index--;
                    $('.shade img').remove();
                    $('.shade .left').after(data.result[index].couponProductImg);
                }
            })


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