/**
 * Created by Noom on 2017/6/27 0027.
 */
$(function () {
    /*获取商店信息*/
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getgsshop',
        dataType: 'json',
        success: function (data) {
            var tag = '';
            $.each(data.result, function (i, v) {
                tag += '<li>' + v.shopName + '</li>'
            });
            $('.shopHidden').html(tag);
            $('.shopHidden>li').click(function () {
                //console.log($(this).index());//这就是shopid
                $('.shopHidden').css({display: 'none'});
                flag = true;
                $('.shop span').css({transform: 'rotate(360deg)'})
                $('.shop b').html($(this).html());
                x = $(this).index();
                getList(x,y);
            })
        }
    });

    /*获取地区信息*/
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getgsshoparea',
        dataType: 'json',
        success: function (data) {
            var tag = '';
            $.each(data.result, function (i, v) {
                tag += '<li>' + v.areaName + '</li>'
            });
            $('.areaHidden').html(tag);
            $('.areaHidden>li').click(function () {
                $('.areaHidden').css({display: 'none'});
                flags = true;
                $('.area span').css({transform: 'rotate(360deg)'});
                $('.area b').html($(this).html().substr(0, 2));
                y = $(this).index();
                getList(x,y);
            })
        }
    })

    var flag = true;
    $('.content>.top>div:nth-of-type(1)').click(function () {
        if(flag) {
            $(this.lastElementChild).css({transform: 'rotate(180deg)'})
            $('.areaHidden').css({display: 'none'});
            $('.shopHidden').css({display: 'block'});
            flag = false;
            flags = true;
            $('.top div:nth-of-type(2) span').css({transform: 'rotate(0deg)'});

        }else {
            $(this.lastElementChild).css({transform: 'rotate(0deg)'})
            $('.shopHidden').css({display: 'none'});
            flag = true;
        }
    })
    var flags = true;
    $('.content>.top>div:nth-of-type(2)').click(function () {
        if(flags) {
            $(this.lastElementChild).css({transform: 'rotate(180deg)'})
            $('.shopHidden').css({display: 'none'});
            $('.areaHidden').css({display: 'block'});
            flags = false;
            flag = true;
            $('.top div:nth-of-type(1) span').css({transform: 'rotate(0deg)'});
        }else {
            $(this.lastElementChild).css({transform: 'rotate(0deg)'})
            $('.areaHidden').css({display: 'none'});
            flags = true;
        }
    });

    var x = 0,
        y = 0;

    getList(x,y)
    /**
     * 请求详细列表
     * @param x
     * @param y
     */
    function getList(x,y) {
        $.ajax({
            url:'http://127.0.0.1:3000/api/getgsproduct',
            dataType:'json',
            data:{shopid:x, areaid:y},
            success: function (data) {
                console.log(data);
                var html = template('noom',data);
                $('.want').html(html);
            }
        })
    }

})