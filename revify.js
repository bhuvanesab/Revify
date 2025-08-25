let homeForm = document.getElementById('revifyHomeForm');
let searchBtn = document.getElementById('revifyHomeBtn');

let choice = document.getElementById('choice')
let statusData = true;

function nextWebsite() {
    let selectedData = choice.value;
    if (selectedData === 'restaurant') {
        window.open("https://restaurentp2.ccbp.tech/", "_blank");
    } else if (selectedData === 'theater') {
        window.open("https://theaterp2.ccbp.tech/", "_blank");
    } else if (selectedData === 'school') {
        window.open("https://schoolp2.ccbp.tech", "_blank");
    }
}

searchBtn.onclick = function() {
    homeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        nextWebsite();
    });
}
