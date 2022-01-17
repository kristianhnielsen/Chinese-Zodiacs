
function findAnimal() {
    let year = document.getElementById("year-input").value;
    let minYear = 4
    let modular = (year - minYear) % 12;
    if (year < minYear) {
        window.alert(`${year} is an invalid year, please try another.`);
        return;
    }
    console.log(modular)
    const animalOrder = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    
    document.getElementById("find-zodiac-result").innerHTML =  "You are born in the year of the " + "<strong>" + animalOrder[modular] + "</strong>";

    const searchResultIcon = document.querySelector("#search-result-icon-img");
    searchResultIcon.src = `./img/${animalOrder[modular].toLowerCase()}.png`;
    const searchResultIconAnchor = document.querySelector('#search-result-icon');
    searchResultIconAnchor.href = `./${animalOrder[modular].toLowerCase()}.html`;
    document.getElementById('zodiac-result').style.display = 'flex';
}
    
function initYear(animal) {
    let earliestYearOfRat = 1936;
    const animalOrder = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
    return earliestYearOfRat + animalOrder.indexOf(animal);
};    
