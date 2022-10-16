document.getElementById('yearNow').innerHTML = new Date().getFullYear();
// var ul = $('<ul>').appendTo('#hyperlink');
// var json = { items: ['item 1', 'item 2', 'item 3'] };
// $(json.items).each(function(index, item) {
//     ul.append($(document.createElement('li')).text(item));
// });
$(function() {   
    var hyperlink = [];
    $.getJSON('hyperlink.json', function(data) {
        $.each(data.linkList, function(i, h) {
            var url = '<li>' + '<a href="https://'+ h.url +'" target="_blank">' + h.title + '</a>' + '</li>'
            $(url).appendTo('#hyperlinkList');
        });  
    });
});
$(document).ready(function() {
    $("body").on("contextmenu", function(e) {
        return false;
    });
});