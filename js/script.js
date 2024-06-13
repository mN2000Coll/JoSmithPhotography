function navShow() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    } 
  }

  $(window).resize(function(){
    var x = document.getElementById("navLinks");
    if (x.style.display === "none") {
      x.style.display = "flex";
  }
  });

