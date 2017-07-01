/**
 * Created by Noom on 2017/6/25 0025.
 */
$(function () {
    /*获取导航栏内容*/
    $.ajax({
        url:'http://127.0.0.1:3000/api/getbaicaijiatitle',
        dataType:'json',
        success: function (data) {
            var html = template('noom',data);
            $('.content>.wrap>ul:nth-of-type(1)').html(html);

            /*计算ul的宽度*/
            var lis = $('.content>.wrap>ul:nth-of-type(1) li');
            console.log(lis.length);
            var ulLength = 0;
            /*点击样式设置*/
            $(lis[0]).addClass('selected');
            lis.click(function () {
                lis.css("color","black");
                lis.removeClass('selected');
                $(this).css("color","red");
                $(this).addClass('selected');
            })
            $.each(lis, function (i,v) {
                ulLength = ulLength + $(this).innerWidth();
            });
            $('.content>.wrap>ul:nth-of-type(1)').width(ulLength);
            window.onresize = function(){
                /*计算ul的宽度*/
                var lis = $('.content>.wrap>ul:nth-of-type(1) li');
                var ulLength = 0;
                $.each(lis, function (i,v) {
                    ulLength = ulLength + $(this).innerWidth();
                });
                $('.content>.wrap>ul:nth-of-type(1)').width(ulLength);
            };

            getlist(0);
            /*点击改变显示内容*/
            var as = $('.content>.wrap>ul:nth-of-type(1) a');
            as.click(function () {
                var index = $(this).index();
                getlist(index);
            })


        }
    })


    /**
     * 获取内部详情函数
     * @param i
     */
    function getlist(i) {
        $.ajax({
            url:'http://127.0.0.1:3000/api/getbaicaijiaproduct',
            dataType:'json',
            data:{titleid:i},
            success: function (data) {
                console.log(data);
                var html = template('norine',data);
                $('.content>ul').html(html);
            }
        })
    }
})