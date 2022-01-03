
$(document).ready(function() {
    // load navbar
    $("nav").load("navbar.html");
    $("footer").load("footer.html");
    
    function findAnimal() {
        let year = document.getElementById("year-input").value;
        let modular = (year - 1900) % 12;
        const animalOrder = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
        
        document.getElementById("find-zodiac-result").innerHTML =  "You are born in the year of the " + "<strong>" + animalOrder[modular] + "</strong>";

        let searchResultIcon = document.createElement("img");
        searchResultIcon.alt = "search result zodiac icon";
        searchResultIcon.src = "./img/" + animalOrder[modular].toLowerCase() + ".png";
        let searchResultIconAnchor = document.createElement('a');
        searchResultIconAnchor.id = "search-result-icon";
        searchResultIconAnchor.href = "./" + animalOrder[modular].toLowerCase() + ".html";
        searchResultIconAnchor.appendChild(searchResultIcon)
        document.getElementById("find-zodiac-result").after(searchResultIconAnchor);
    }
    
    let documentName = document.location.pathname.split('/').slice(-1)[0];
    console.log(documentName)
    if (documentName != "index.html") {
        // load icon
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
    } else if (documentName == "index.html") {
        // find my zodiac button
        document.getElementById("find-zodiac-button").onclick = function() {findAnimal()};

    }
    
    

    
    function initYear(animal) {
        let earliestYearOfRat = 1936;
        const animalOrder = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
        return earliestYearOfRat + animalOrder.indexOf(animal);
    };    
    
});

