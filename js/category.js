/**
 * Created by Noom on 2017/6/24 0024.
 */
$(function () {
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getcategorytitle',
        dataType: 'json',
        success: function (data) {
            var html = template('tittle', data);
            $(".ul").append(html);
            var lis = $('.ul li');
            $.each(lis, function (i, v) {
                getEvery(i, v)//得到8个obj,obj.result是数组，要将数组放到每一个对应的li里面，用这个i
            });
            /*点击显示隐藏*/
            $('.ul>li').click(function () {
                var a = $(this).attr('lidong');
                if (a == 'true') {
                    $($(this).get(0).nextElementSibling).css({display: 'block'});
                    $(this).attr('lidong','false');
                } else {
                    $($(this).get(0).nextElementSibling).css({display: 'none'});
                    $(this).attr('lidong','true');
                }
            })
        }
    });


    /**
     * 获取细节函数
     */
    function getEvery(i, v) {
        $.ajax({
            url: 'http://127.0.0.1:3000/api/getcategory',
            dataType: 'json',
            data: {titleid: i},
            success: function (data) {
                var html = template('titleEve', data);
                $(v).after(html);
            }
        });
    }
})