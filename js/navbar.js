$(function() {
    $(".header .openmenu").click(function() {
        $(".header .center").addClass("menuopen")
    })
    $(".header .closemenu").click(function() {
        $(".header .center").removeClass("menuopen")
    })
})

document.addEventListener('DOMContentLoaded', function() {
    // 获取图片元素
    var img = document.querySelector('.kanban');
    
    // 监听图片的点击事件
    img.addEventListener('click', function() {
        // 将页面滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 可以使滚动过程更平滑
        });
    });
});
