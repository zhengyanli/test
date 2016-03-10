$(function () {
    var nua = navigator.userAgent
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }

    var imgwidth=$(".Shooting>div img").width();
    var imgheight=$(".Shooting>div img").height();
    $(".Shooting>div:nth-last-child(1)>div,.Shooting>div:nth-last-child(1)>input").css({'width':imgwidth+8,'height':imgheight+9})
})