// Cat years, Dog years

function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears >= 1) {

        if (humanYears === 1) {
            catYears = 15;
        } else if (humanYears === 2) {
            catYears = 15 + 9;
        } else {
            catYears = 15 + 9 + (4 * (humanYears - 2));
        }


        if (humanYears === 1) {
            dogYears = 15;
        } else if (humanYears === 2) {
            dogYears = 15 + 9;
        } else {
            dogYears = 15 + 9 + (5 * (humanYears - 2));
        }
    }

    return [humanYears, catYears, dogYears];
}
