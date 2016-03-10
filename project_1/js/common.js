$(".alert-box").click(function () {
    $("div[role=alert].alert").removeClass('fade');
})
$("div[role=alert].alert").click(function () {
    $("div[role=alert].alert").addClass('fade');
})