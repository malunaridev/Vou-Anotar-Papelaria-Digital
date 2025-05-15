function openMenu1() {
  document.getElementById("mobileLeftMenu").style.width = "310px";
  document.getElementById("mobileLeftMenu").style.opacity = "1";
  document.getElementById("mobileLeftOverlay").style.display = "block";
  document.getElementById("mobileLeftMenu").style.borderRight =
    "6px solid #b37ff2";
}
function closeMenu1() {
  document.getElementById("mobileLeftMenu").style.width = "0";
  document.getElementById("mobileLeftMenu").style.opacity = "0";
  document.getElementById("mobileLeftOverlay").style.display = "none";
  document.getElementById("mobileLeftMenu").style.borderRight = "0";
}

function openMenu2() {
  document.getElementById("mobileRightMenu").style.width = "310px";
  document.getElementById("mobileRightMenu").style.opacity = "1";
  document.getElementById("mobileRightOverlay").style.display = "block";
  document.getElementById("mobileRightMenu").style.borderLeft =
    "6px solid #b37ff2";
}
function closeMenu2() {
  document.getElementById("mobileRightMenu").style.width = "0";
  document.getElementById("mobileRightMenu").style.opacity = "0";
  document.getElementById("mobileRightOverlay").style.display = "none";
  document.getElementById("mobileRightMenu").style.borderLeft = "0";
}
