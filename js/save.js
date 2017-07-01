/**
 * Created by Noom on 2017/6/25 0025.
 */
$(function () {
    /*请求商品列表*/
    var zwjj = 0;
    var num;
    var end = true;
    /*设置点击翻页*/
    $('.choose>button:eq(0)').click(function () {
        if (zwjj > 0) {
            zwjj--;
            console.log(zwjj);
            choose();
            get(zwjj);
        }
        get(zwjj);
    });
    $('.choose>button:eq(1)').click(function () {
        if (zwjj < num) {
            zwjj++;
            console.log(zwjj);
            choose();
            get(zwjj);
        }
        get(zwjj);
    })

    get(zwjj);
    /**
     * 获取商品列表
     */
    function get(i) {
        $.ajax({
            url: 'http://127.0.0.1:3000/api/getmoneyctrl',
            dataType: 'json',
            data: {pageid: zwjj},
            success: function (data) {
                num = Math.ceil(data.totalCount / data.pagesize);
                var html = template('model', data);
                $('#productbox').html(html);
                if (end) {
                    var tag = '';
                    for (i = 0; i < num; i++) {
                        tag += '<option value="' + i + '">' + (i + 1) + '/' + num + '</option>';
                    }
                    $('select').html(tag);
                    end = false;
                }
            }
        })
    };


    //页码框改变事件
    $('select').change(function () {
        $(this.children).each(function (index, value) {
            if (value.selected) {
                zwjj = value.value;
                get(zwjj);
            }
        })
    });
    //选择框文本改变事件
    function choose() {
        $('select option').each(function (index, value) {
            if (value.value == (zwjj)) {
                value.selected = true;
            }
        });
    }
})