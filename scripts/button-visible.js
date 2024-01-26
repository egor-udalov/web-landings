document.addEventListener('DOMContentLoaded', function () {
    var visible_clicks = document.querySelectorAll('.button-visible');
    var items_hidden = document.querySelectorAll('.hidden-content');

    for (var i = 0; i < visible_clicks.length; i++) {
        (function (i) {
            visible_clicks[i].addEventListener('click', function (event) {
                var visible_click = this;
                var item_hidden = items_hidden[i];

                visible_click.classList.toggle('visible-active');
                item_hidden.classList.toggle('visible-active');
            });
        })(i);
    }
});