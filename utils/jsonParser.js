import fs from 'fs';

export function parseJSONFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

export function writeJSONFile(filePath, jsonData) {
    const data = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(filePath, data, 'utf-8');
}