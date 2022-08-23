$(document).ready(function(){
    $(".list-group-item").click(function(){
        $(this).toggleClass("bg-warning");

        presenttrainees = $(".bg-warning").length;
        document.getElementById("presentcount").innerHTML = presenttrainees;
        
        absenttrainees = totalnumoftrainees-presenttrainees;
        document.getElementById("absentcount").innerHTML = absenttrainees;
    })
    totalnumoftrainees = $(".list-group-item").length;
    document.getElementById("totalcount").innerHTML = totalnumoftrainees
    
});