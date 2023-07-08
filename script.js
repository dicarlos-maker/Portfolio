var menuToggle = document.getElementById("menuToggle");
  var navigation = document.querySelector("header > nav");

  menuToggle.addEventListener("click", function() {
    navigation.style.display = navigation.style.display === "none" ? "block" : "none";
  });