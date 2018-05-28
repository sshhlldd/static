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
        var src = $(this).closest('.ec_goods').find('img').attr('src');
        var html = '<div style="text-align:center;"><img src="' + src + '"></div>'
        mybase.mypop('兑换', html);
    })

})