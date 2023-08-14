function myFunction() {
    var x = document.getElementById("navParent");
    if (x.className === "Nav-Parent") {
      x.className += " responsive";
    } else {
      x.className = "navparent";
    }
  }


  var mainListDiv = document.getElementById("mainList"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};