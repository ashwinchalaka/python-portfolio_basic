var currentLinkIdId = "pdf_viewer-link";
var currentViewId = "resume-inViewer";

function bolden(thisId) {
    var element2Edit = document.getElementById(thisId);
    element2Edit.style.fontWeight = "bold";
    element2Edit.style.textShadow = "0 0 10px white";
}

function unbolden(thisId) {
    if (currentLinkIdId.localeCompare(thisId) != 0) {
        var element2Edit = document.getElementById(thisId);
        element2Edit.style.fontWeight = "normal";
        element2Edit.style.textShadow = "0 0 0 white";
    }
}

function switchView(newLinkId, newViewId) {
    var oldLink = document.getElementById(currentLinkIdId);
    
    oldLink.style.fontWeight = "normal";
    oldLink.style.textShadow = "0 0 0 white";
    bolden(newLinkId);
    
    var oldView = document.getElementById(currentViewId);
    
    oldView.style.display = "none";
    
    var newView = document.getElementById(newViewId);
    
    newView.style.display = "block";
    
    currentLinkIdId = newLinkId;
    currentViewId = newViewId;
}

function highlight_button() {
    var footerDiv = document.getElementsByClassName("footer")[0];
    footerDiv.style.boxShadow = "0 0 10px white";
    var footerText = footerDiv.getElementsByTagName("p")[0];
    footerText.style.textShadow = "0 0 10px white";
}

function unhighlight_button() {
    var footerDiv = document.getElementsByClassName("footer")[0];
    footerDiv.style.boxShadow = "0 0 0 white";
    var footerText = footerDiv.getElementsByTagName("p")[0];
    footerText.style.textShadow = "0 0 0 white";
}

function nav_home() {
    window.location.href = "/";
}