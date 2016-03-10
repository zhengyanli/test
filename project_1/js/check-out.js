$(".tab-content>div>.media").click(function () {
    if ($(this).find("input").prop("checked")) {
        $(this).find("input").prop("checked",false);
    }else{
        $(this).find("input").prop("checked",true);
    }
})
/*$(".tab-content>div>.media").toggle(
    function(){
        $(this).css({"display":"block"})
        $(this).find("input").prop("checked",true);
    },
    function(){
        $(this).css({"display":"block"})
        $(this).find("input").prop("checked",false);
    }
);*/
