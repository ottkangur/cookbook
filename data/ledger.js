import fs from 'fs';
import { parseJSONFile, writeJSONFile } from '../utils/jsonParser.js';

export class Ledger {
    constructor() {
        this.desertsEntries = [];
        this.mainCoursesEntries = [];
    }

    static addMainCourseEntry(entry) {
        const data = parseJSONFile('./data/doneMainCourses.json').soolane || [];
        data.push(entry);
        writeJSONFile('./data/doneMainCourses.json', { soolane: data });
    }

    static addDesertEntry(entry) {
        const data = parseJSONFile('./data/doneDeserts.json').magus || [];
        data.push(entry);
        writeJSONFile('./data/doneDeserts.json', { magus: data });
    }

    static getMainCourseEntries() {
        return parseJSONFile('./data/doneMainCourses.json').soolane || [];
    }

    static getDesertEntries() {
        return parseJSONFile('./data/doneDeserts.json').magus || [];
    }

    static clearMainCourseEntries() {
        writeJSONFile('./data/doneMainCourses.json', { soolane: [] });
    }

    static clearDesertEntries() {
        writeJSONFile('./data/doneDeserts.json', { magus: [] });
    }
}