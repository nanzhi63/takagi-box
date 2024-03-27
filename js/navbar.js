$(function() {
    $(".header .openmenu").click(function() {
        $(".header .center").addClass("menuopen")
    })
    $(".header .closemenu").click(function() {
        $(".header .center").removeClass("menuopen")
    })
})