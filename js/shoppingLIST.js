/**
 * Created by Noom on 2017/6/24 0024.
 */
$(function () {
    /*��ȡ��ַ���洫������ID*/
    var aurl = location.search;
    getNum(aurl);//��������ķ���ֵvalue����IDֵ
    /*������Ʒ����*/
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getcategorybyid',
        dataType: 'json',
        data: {categoryid: value},
        success: function (data) {
            $('.content>div>a:eq(2)').html(data.result[0].category);
        }
    });
    var zwjj = 1;
    var num;
    var end = true;
    /*���õ����ҳ*/
    $('.choose>button:eq(0)').click(function () {
        if (zwjj > 1) {
            zwjj--;
            choose();
            getdata(zwjj);
        }
    });
    $('.choose>button:eq(1)').click(function () {
        if (zwjj < num) {
            zwjj++;
            choose();
            getdata(zwjj);
        }
    })
    /*��ȡ��ϸ��Ʒ�б�*/
    getdata(zwjj);
    function getdata(i) {
        $.ajax({
            url: 'http://127.0.0.1:3000/api/getproductlist',
            dataType: 'json',
            data: {categoryid: value, pageid: zwjj},
            success: function (data) {
                num = Math.ceil(data.totalCount / data.pagesize);
                var html = template('noom', data);
                $('.bigUL').html(html)
                if (end) {
                    var tag = '';
                    for (i = 0; i < num; i++) {
                        tag += '<option value="' + (i + 1) + '">' + (i + 1) + '/' + num + '</option>';
                    }
                    $('select').html(tag);
                    end = false;
                }
            }
        })
    }


    //ҳ���ı��¼�
    $('select').change(function () {
        $(this.children).each(function (index, value) {
            if (value.selected) {
                zwjj = value.value;
                getdata(zwjj);
            }
        })
    });
    //ѡ����ı��ı��¼�
    function choose() {
        $('select option').each(function (index, value) {
            if (value.value == (zwjj)) {
                value.selected = true;
            }
        });
    }


    /**
     * ���ַ�������ȡ���ֵķ���
     * @param text
     */
    function getNum(text) {
        return value = text.replace(/[^0-9]/ig, "");
    }
})