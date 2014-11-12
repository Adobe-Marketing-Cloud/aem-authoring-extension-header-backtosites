/*
 * #%L
 * aem-authoring-extension-header-backtosites
 * %%
 * Copyright (C) 2014 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
 (function(window, document, Granite, $) {
    "use strict";

    var BACK_TO_SITES_BUTTON = ".cq-BackToSites-action";

    $(document).on("click", BACK_TO_SITES_BUTTON, function() {
        var $button = $(this);
        var path = Granite.author.ContentFrame.currentLocation();
        window.location = $button.data("sitesurl") + path.substring(0, path.lastIndexOf('/'));
    });

})(window, document, Granite, Granite.$);
