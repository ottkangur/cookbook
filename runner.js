import { parseJSONFile } from './utils/jsonParser.js';
import { Ledger } from './data/ledger.js';
// import { TYPES } from '@constants';

function selectDish(type) {
    let winner;
    const dishes = parseJSONFile('./data/dishes.json');
    // const ledger = new Ledger();
    //let entries = ledger.getEntries();
    //console.log(dishes);
    if (type === "magus") {
        const desserts = Object.values(dishes.magus).flat();
        let doneDeserts = Ledger.getDesertEntries();
        console.log(`Done deserts so far: ${doneDeserts}`);
        if (doneDeserts.length >= 10) {
            Ledger.clearDesertEntries();
            doneDeserts = [];
        }

        winner = desserts[Math.floor(Math.random() * desserts.length)];

        while (doneDeserts.includes(winner)) {
            winner = desserts[Math.floor(Math.random() * desserts.length)];
        }

        console.log(`Today let's have '${winner}' for dessert!`);
        Ledger.addDesertEntry(winner);
    } else if (type === "soolane") {
        const mainCourses = Object.values(dishes.soolane).flat();
        let doneMainCourses = Ledger.getMainCourseEntries();
        console.log(`Done main courses so far: ${doneMainCourses}`);
        if (doneMainCourses.length >= 10) {
            Ledger.clearMainCourseEntries();
            doneMainCourses = [];
        }
        winner = mainCourses[Math.floor(Math.random() * mainCourses.length)];

        while (doneMainCourses.includes(winner)) {
            winner = mainCourses[Math.floor(Math.random() * mainCourses.length)];
        }

        console.log(`Today let's have '${winner}' for main course!`);
        Ledger.addMainCourseEntry(winner);
    } else {
        throw new Error(`'${type}' is not correct food type`);
    }
}

selectDish("soolane");
// selectDish("magus");