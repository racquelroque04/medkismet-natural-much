window.onscroll = function() {
  scrollFunction();
  console.log('test')
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.opacity = "85%";
    document.getElementById("navbar").style.backgroundColor = "#2B2A2A";
    document.getElementsByClassName("nav-link")[0].style.color = "#FFFFFF";
    document.getElementsByClassName("nav-link")[1].style.color = "#FFFFFF";
    document.getElementsByClassName("nav-link")[2].style.color = "#FFFFFF";
    document.getElementById("logo").src = '../src/assets/NaturalmuchLogoWhite.svg';
    document.getElementById("cartIcon").src = '../src/assets/cart-white.svg';
  } else {
    document.getElementById("navbar").style.backgroundColor = "#FBD690";
    document.getElementById("navbar").style.opacity = "100%";
    document.getElementsByClassName("nav-link")[0].style.color = "#000000";
    document.getElementsByClassName("nav-link")[1].style.color = "#000000";
    document.getElementsByClassName("nav-link")[2].style.color = "#000000";
    document.getElementById("logo").src = '../src/assets/NaturalmuchLogo.svg';
    document.getElementById("cartIcon").src = '../src/assets/cart.svg';
  }
}