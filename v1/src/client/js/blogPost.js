// Blog script

var $ = require('jquery');

$(window).scroll(function () {
    var threshold = 300,
        $shareEl = $("#social-share-fixed"),
        op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;

    if (op <= 0) {
        $shareEl.hide();
    } else {
        $shareEl.show();
    }
    $shareEl.css("opacity", op);
});