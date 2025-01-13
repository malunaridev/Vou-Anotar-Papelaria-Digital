const scrollingTitle = document.getElementById("scrollingTitle").innerHTML;

var chars = Array.from(scrollingTitle);

      function scrollTitle() {
        chars.push(chars.shift());
        document.title = chars.join("");
        window.setTimeout(scrollTitle, 120);
      }

      (function () {
        scrollTitle();
      })();
