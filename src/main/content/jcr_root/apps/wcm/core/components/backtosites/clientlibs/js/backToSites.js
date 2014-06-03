(function(window, document, Granite, $) {
    "use strict";

    var BACK_TO_SITES_BUTTON = ".cq-BackToSites-action";

    $(document).on("click", BACK_TO_SITES_BUTTON, function() {
        var $button = $(this);
        var path = Granite.author.ContentFrame.currentLocation();
        window.location = $button.data("sitesurl") + path.substring(0, path.lastIndexOf('/'));
    });

})(window, document, Granite, Granite.$);
