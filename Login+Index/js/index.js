// Navbar
function openDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

// Side Nav
var sideNavObj=document.getElementById("sidenav");
        function openNav() {
            sideNavObj.style.width= "250px";
            document.getElementById("main").style.marginRight = "250px";
        }
        function closeNav() {
            sideNavObj.style.width= "0";
            document.getElementById("main").style.marginRight = "0";
        }

// Cartable
var cartableObj=document.getElementById("cartable");
var notificationObj=document.getElementById("notification");
            function openCartable() {
                cartableObj.style.display= "contents";
                notificationObj.style.display= "none";
            }
            function closeCartable() {
                cartableObj.style.display= "none";
                notificationObj.style.display= "contents";
            }
            