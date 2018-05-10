$(document).ready(function() {



    var id = "12345";
    var content = "clickhere";


    var text1 = "<button " + 'id = ' + id + ">" + content + "</button>";
    var text2 = "<button " + 'id=123456' + ">" + "btn2" + "</button>";
    var text3 = "<button " + 'id=123456' + ">" + "btn1" + "</button>";
    var text4 = "<button " + 'id=123456' + ">" + "btn1" + "</button>";
    var text5 = "<button " + 'id=123456' + ">" + "btn1" + "</button>";
    var text6 = "<button " + 'id=123456' + ">" + "btn1" + "</button>";
    var text7 = "<button " + 'id=123456' + ">" + "btn1" + "</button>";
    var text8 = "<button " + 'id=123456' + ">" + "btn1" + "</button>";



    var dem = 1;

    $("#btnthem").click(function() {


        $(".btngroup").append(text1);





    })





    $("#btnset").click(function() {


        openNav();

    })








})