// alert("Hello World");

$(document).ready(function(){
    $("div.box").width("200px");
    $("div.box").height("200px");
    $("div.box").css("background-color","red");
    $("div.box").css("margin-left","2%");
    $("div.box").css("margin-top","2%");
    $("h2").css("margin-left","2%");
    $("button").css("margin-left","2%");

    $("button").click(function(){
        $("div.box").hide();
    });





});