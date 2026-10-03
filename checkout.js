(function () {
  var urls = window.CHECKOUT_URLS || {};
  var nodes = document.querySelectorAll("[data-product]");

  function checkoutUrl(value) {
    if (typeof value !== "string") return "";
    var url = value.trim();
    var lower = url.toLowerCase();
    if (lower.indexOf("https://") !== 0 && lower.indexOf("http://") !== 0) return "";
    try {
      var parsed = new URL(url);
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return "";
    } catch (err) {
      return "";
    }
    return url;
  }

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var key = node.getAttribute("data-product") || "";
    var href = checkoutUrl(urls[key]);
    if (!href) continue;
    node.setAttribute("href", href);
  }
})();
