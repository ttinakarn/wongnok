$(window).resize(function()
{
    var width = $(window).width();
    var mainNav = document.getElementById("mainNav");
    var jumbotron = document.getElementById("jumbotron");
    if(width <= 660)
    {
        $(jumbotron).removeClass('centered');
    }
    else if(width > 660)
    {
        $(jumbotron).addClass('centered');
    }
})
.resize();