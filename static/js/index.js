
function showSecondView(x) {
    document.getElementsByClassName('clickable_area')[0].className = "clickable_area-2";
    document.getElementsByClassName('ap_box')[0].className = "ap_box-2";
    document.getElementsByClassName('options_wrapper')[0].style.zIndex = "1";
}

function showFirstView(x) {
    document.getElementsByClassName('clickable_area-2')[0].className = "clickable_area";
    document.getElementsByClassName('ap_box-2')[0].className = "ap_box";
    document.getElementsByClassName('options_wrapper')[0].style.zIndex = "-1";
}

function highlightMyStory(x) {
    document.getElementById("mystory-underline").style.opacity = "1";
    document.getElementById("mystory-text").style.textShadow = "0 0 10px white";
    document.getElementById("projects-text").style.textShadow = "0 0 10px white";
    document.getElementById("projects-text").style.color = "transparent";
    document.getElementById("resume-text").style.textShadow = "0 0 10px white";
    document.getElementById("resume-text").style.color = "transparent";
}

function unhighlightMyStory(x) {
    document.getElementById("mystory-underline").style.opacity = "0";
    document.getElementById("mystory-text").style.textShadow = "0 0 0 white";
    document.getElementById("projects-text").style.textShadow = "0 0 0 white";
    document.getElementById("projects-text").style.color = "white";
    document.getElementById("resume-text").style.textShadow = "0 0 0 white";
    document.getElementById("resume-text").style.color = "white";
}

function highlightProjects(x) {
    document.getElementById("projects-underline").style.opacity = "1";
    document.getElementById("projects-text").style.textShadow = "0 0 10px white";
    document.getElementById("mystory-text").style.textShadow = "0 0 10px white";
    document.getElementById("mystory-text").style.color = "transparent";
    document.getElementById("resume-text").style.textShadow = "0 0 10px white";
    document.getElementById("resume-text").style.color = "transparent";
}

function unhighlightProjects(x) {
    document.getElementById("projects-underline").style.opacity = "0";
    document.getElementById("projects-text").style.textShadow = "0 0 0 white";
    document.getElementById("mystory-text").style.textShadow = "0 0 0 white";
    document.getElementById("mystory-text").style.color = "white";
    document.getElementById("resume-text").style.textShadow = "0 0 0 white";
    document.getElementById("resume-text").style.color = "white";
}

function highlightResume(x) {
    document.getElementById("resume-underline").style.opacity = "1";
    document.getElementById("resume-text").style.textShadow = "0 0 10px white";
    document.getElementById("mystory-text").style.textShadow = "0 0 10px white";
    document.getElementById("mystory-text").style.color = "transparent";
    document.getElementById("projects-text").style.textShadow = "0 0 10px white";
    document.getElementById("projects-text").style.color = "transparent";
}

function unhighlightResume(x) {
    document.getElementById("resume-underline").style.opacity = "0";
    document.getElementById("resume-text").style.textShadow = "0 0 0 white";
    document.getElementById("mystory-text").style.textShadow = "0 0 0 white";
    document.getElementById("mystory-text").style.color = "white";
    document.getElementById("projects-text").style.textShadow = "0 0 0 white";
    document.getElementById("projects-text").style.color = "white";
}