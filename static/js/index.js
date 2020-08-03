
function showSecondView(x) {
    // alert("hi");
    var element2hide = document.getElementById('first-view');
    element2hide.style.display = "none";
    var element2show = document.getElementById('second-view');
    element2show.style.display = "block";
}

function showFirstView(x) {
    // alert("Ashwin");
    var element2hide = document.getElementById('second-view');
    element2hide.style.display = "none";
    var element2show = document.getElementById('first-view');
    element2show.style.display = "block";
}

function highlightMyStory(x) {
    alert("My Story");
    var element2highlight = document.getElementById('mystory-underline');
    element2highlight.style.display = "block";
}

function unhighlightMyStory(x) {
    alert("Made His-story");
    var element2highlight = document.getElementById('mystory-underline');
    element2highlight.style.display = "none";
}

// function highlightProjects(x) {
//     var element2highlight = document.getElementById('projects-underline');
//     element2highlight.style.display = "block";
// }

// function unhighlightProjects(x) {
//     var element2highlight = document.getElementById('projects-underline');
//     element2highlight.style.display = "none";
// }

// function highlightResume(x) {
//     var element2highlight = document.getElementById('resume-underline');
//     element2highlight.style.display = "block";
// }

// function unhighlightResume(x) {
//     var element2highlight = document.getElementById('resume-underline');
//     element2highlight.style.display = "none";
// }