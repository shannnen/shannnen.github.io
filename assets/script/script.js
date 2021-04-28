function menuClick() {
    var x = document.getElementById("links");
    var c = document.getElementById("circle");
    if (x.style.display === "block") {
      x.style.display = "none";
      c.style.display = "none"
    } else {
      x.style.display = "block";
      c.style.display = "block";
    }
  }