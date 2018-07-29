
var search_bar = document.getElementById("search_loliname");

$('#search_loli_button').on('click', function () {
    var loliname = search_bar.value;
    location.replace("lolisearch.html");
})