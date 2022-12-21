window.onload = function() {
    var menu = document.querySelectorAll('.navGroupCategoryTitle');
    for (var i = menu.length; i --> 0;) {
        menu[i].innerHTML = menu[i].innerHTML.replace(' |', '');
    }
}
