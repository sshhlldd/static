//弹出modal框
var mybase = {
    mypop: function(tit, html) {
        $('.ec_pop').remove();
        $('.ec_pop').off('click', '.close')
        var modalDiv = '<div class="ec_pop">\
            <div class="cover"></div>\
            <div class="pop_box">\
            <div class="pop_head"><button type="button" class="close">×</button><h4>' + tit + '</h4></div>\
            <div class="pop_body">' + html + '</div>\
            <div class="pop_foot">\
            <button href="javascript:;" class="confirm btn btn-green">确定</button></div>\
            </div></div>';
        $('body').append(modalDiv);
        $('.ec_pop').fadeIn();
        $('.ec_pop').on('click', '.close', function() {
            $(this).parents('.ec_pop').hide();
        })
    },
    menuCtrl: function() {
        var ww = (parseFloat(100 / $('.nav .box li').length));
        $('nav li').css({ 'width': ww + '%' });
        $('.nav').on('click', 'li>a', function() {
            $(this).parents('li').siblings('li').each(function() {
                if ($(this).find('a').hasClass('on')) {
                    $(this).find('dl').addClass('down').removeClass('on');
                    $(this).find('a').removeClass('on');
                }
            })
            $(this).toggleClass('on');
            if ($(this).hasClass('on')) {
                $(this).siblings('dl').addClass('up').removeClass('down');
            } else {
                $(this).siblings('dl').addClass('down').removeClass('on');
            }
        })
    }
}

$(function() {
    mybase.menuCtrl();
    $('.ec_goods button').click(function() {
        var html = '<div class="pop-address">\
        <p class="txt_align_c">請輸入收件人資料</p>\
        <p><input class="form-control" type="text" id="" placeholder="請輸入得獎人姓名"></p>\
        <p><input class="form-control" type="email" id="" placeholder="請輸入E-mail"></p>\
        <p><input class="form-control" type="text" id="" placeholder="請輸入收件地址"></p>\
        <p><input class="form-control" type="text" id="" placeholder="請輸入郵政區號"></p>\
        <p><input class="form-control" type="text" id="" placeholder="请输入聯絡電話"></p>\
        <p><textarea class="form-control" placeholder="備註信息"></textarea></p>\
        </div>'
        mybase.mypop('兑奖', html);
    })

})