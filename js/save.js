/**
 * Created by Noom on 2017/6/25 0025.
 */
$(function () {
    /*������Ʒ�б�*/
    var zwjj = 0;
    var num;
    var end = true;
    /*���õ����ҳ*/
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
     * ��ȡ��Ʒ�б�
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


    //ҳ���ı��¼�
    $('select').change(function () {
        $(this.children).each(function (index, value) {
            if (value.selected) {
                zwjj = value.value;
                get(zwjj);
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
})