
$(document).ready(function() {
    // load navbar
    $("nav").load("navbar.html");
    $("footer").load("footer.html");
    
    // load icon
    let documentName = document.location.pathname.split('/').slice(-1)[0];
    let animalFromDocName = documentName.split('.')[0];
    let icon_img = document.createElement('img');
    icon_img.src ="../img/" + animalFromDocName + ".png";
    icon_img.alt = animalFromDocName + " zodiac icon";
    document.getElementById("zodiac-icon").appendChild(icon_img); 
    
    // set h1
    document.getElementById("headline").innerHTML = animalFromDocName;
    
    // calculate years    
    const relevantYears = [];
    let year = initYear(animalFromDocName);
    while ( relevantYears.length < 7 ) {
        relevantYears.push(year);
        year += 12;
    };
    // add each year to ul
    relevantYears.forEach(element => {
        let listYear = document.createElement('li');
        listYear.innerHTML = element;
        document.getElementById("years").appendChild(listYear);
    });
    
    
    function initYear(animal) {
        let earliestYearOfRat = 1936;
        const animalOrder = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
        return earliestYearOfRat + animalOrder.indexOf(animal);
    };    
    
});

