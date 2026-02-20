import * as fs from 'node:fs';
import * as path from 'node:path';

const MEAL_LOGS_DIR = path.join(__dirname,'..','..','..', '..','meal-logs');

function getLogs(days: number = 7) {
    if (!fs.existsSync(MEAL_LOGS_DIR)) {
        console.error(`Directory not found: ${MEAL_LOGS_DIR}`);
        return;
    }

    const files = fs.readdirSync(MEAL_LOGS_DIR)
        .filter(file => file.endsWith('.md'))
        .sort()
        .reverse();

    const selectedFiles = files.slice(0, days);

    if (selectedFiles.length === 0) {
        console.log("No meal logs found.");
        return;
    }

    selectedFiles.forEach(file => {
        const filePath = path.join(MEAL_LOGS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        console.log(`--- File: ${file} ---`);
        console.log(content.split(/\r?\n/).filter(s => s.trim() !== '').join('\n'));
    });
}

const args = process.argv.slice(2);
const days = args[0] ? parseInt(args[0], 10) : 7;

getLogs(days);
