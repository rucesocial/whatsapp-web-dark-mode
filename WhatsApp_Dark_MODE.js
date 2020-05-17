// ==UserScript==
// @name         Whatsapp WEB
// @namespace    https://rucesocial.com
// @version      0.1
// @description  Whatsapp Web Dark Mode
// @author       You
// @match        https://*.web.whatsapp.com/*
// @grant        none
// ==/UserScript==

(function() {
document.onreadystatechange = () => {

  if (document.readyState === 'complete') {
       var element =  document.body;
       element.classList.add("dark");
      /*
      RuceSocial.com
      */
  }
};


})();