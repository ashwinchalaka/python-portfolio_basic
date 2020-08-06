
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
}

function unhighlightMyStory(x) {
    document.getElementById("mystory-underline").style.opacity = "0";
}

function highlightProjects(x) {
    document.getElementById("projects-underline").style.opacity = "1";
}

function unhighlightProjects(x) {
    document.getElementById("projects-underline").style.opacity = "0";
}

function highlightResume(x) {
    document.getElementById("resume-underline").style.opacity = "1";
}

function unhighlightResume(x) {
    document.getElementById("resume-underline").style.opacity = "0";
}