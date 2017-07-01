/**
 * Created by Noom on 2017/6/24 0024.
 */
$(function () {
    /*获取地址后面传过来的ID*/
    var aurl = location.search;
    var aurlNew = aurl.split('&')
    var first = getNum(aurlNew[0])
    var second = getNum(aurlNew[1])

    /*请求商品分类*/
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getcategorybyid',
        dataType: 'json',
        data: {categoryid: first},
        success: function (data) {
            $('.content>div>a:eq(1)').html(data.result[0].category);
        }
    });
    /*请求商品详情*/
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getproduct',
        dataType: 'json',
        data: {productid: second},
        success: function (data) {
            var html = template('noom',data);
            //$('.hexin').html(html);
            $('.warning').before(html);
            var name = data.result[0].productName.split(' ')[0];
            $('.content>div>a:eq(2)').html(name);
            $('.content>div>a:eq(1)').attr('href','shoppingList.html?categoryId=' + first);
        }
    })
    /*请求评价*/
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getproductcom',
        dataType: 'json',
        data: {productid: second},
        success: function (data) {
            var html = template('nooom',data);
            $('.comments').append(html);
        }
    })


    /**
     * 从字符串中提取数字的方法
     * @param text
     */
    function getNum(text) {
        return value = text.replace(/[^0-9]/ig, "");
    }

})