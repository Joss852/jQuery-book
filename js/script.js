$(document).ready(function(){
    $("#book").booklet({
        width: 700,
        height: 500,
        covers: 1,
        closed: 1,
        hoverWidth: 80,
        pagePadding: 0,
        auto: 1,
        delay: 2000,
    });

    $("#prev").click(function(){
        $("#book").booklet("prev")
    });

    $("#next").click(function(){
        $("#book").booklet("next")
    });

    $("#search").click(function(){
        $("#book").booklet("gotopage", $("#search-input").val() );
    });

});