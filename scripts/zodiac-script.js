window.onload = () => {
    // load icon
    let animalFromDocName = document.location.pathname.split('.')[0].slice(1);
    let icon_img = document.createElement('img');
    icon_img.src ="../img/" + animalFromDocName + ".png";
    icon_img.alt = animalFromDocName + " zodiac icon";
    document.getElementById("zodiac-icon").appendChild(icon_img); 
    
    // set h1
    document.getElementById("headline").innerHTML = animalFromDocName;

    // calculate years    
    const relevantYears = [];
    let year = initYear(animalFromDocName);
    while ( relevantYears.length < 9 ) {
        relevantYears.push(year);
        year += 12;
    };
    // // add each year to ul
    relevantYears.forEach(element => {
        let listYear = document.createElement('li');
        listYear.innerHTML = element;
        document.getElementById("years").appendChild(listYear);
    })
};

