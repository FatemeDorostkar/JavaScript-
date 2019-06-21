function openModal() {
    var modalObj = document.getElementById("modal");
    var headerObj=document.getElementsByClassName("header");
    if (modalObj.style.display === "block") {
        modalObj.style.display = "none";
        headerObj[0].className = headerObj[0].className.replace(" shadow", "")
    } else {
        modalObj.style.display = "block";
        headerObj[0].className += " shadow";
    }
}