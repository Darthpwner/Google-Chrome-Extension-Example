//content.js
alert("Hello from Matt's Chrome extension!")

var firstHref = $("a[href^='http']").eq(0).attr("href");

alert(firstHref);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
    }
  }
);