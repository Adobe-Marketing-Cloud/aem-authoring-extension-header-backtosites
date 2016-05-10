/*
 * #%L
 * aem-authoring-extension-header-backtosites
 * %%
 * Copyright (C) 2016 Adobe
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
(function ($, ns, channel, window, undefined) {
    "use strict";

     /**
      *
      * Dependencies
      *
      */

    var ContentFrame = Granite.author.ContentFrame;

     /**
      *
      * Constants
      *
      */

     var BACK_TO_SITES_BUTTON_SELECTOR = ".cq-BackToSites-action";
     var BACK_TO_SITES_DATA_URL = "sitesurl";

     /**
      *
      * Hooks
      *
      */

     channel.on("click", BACK_TO_SITES_BUTTON_SELECTOR, function() {
         var $button = $(this);
         var path = ContentFrame.currentLocation();
         window.location = $button.data(BACK_TO_SITES_DATA_URL) + path.replace(".html", "");
     });

 }(jQuery, Granite.author, jQuery(document), this));
