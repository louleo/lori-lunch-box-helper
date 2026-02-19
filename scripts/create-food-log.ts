import * as path from 'node:path';
import * as fs from 'node:fs';

const LOG_FOLDER = path.join(__dirname, '..', 'meal-logs');

function formatLocalYYYYMMDD(date: Date) {
  const year = date.getFullYear();
  // getMonth() is 0-indexed, so add 1
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const createTemplateConent = (date: string) => {
  return `
## Date: ${date}

## Breakfast


## Lunch


## Dinner
    `;
};

(async function () {
  const date = formatLocalYYYYMMDD(new Date());

  const filePath = path.join(LOG_FOLDER, `${date}.md`);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, createTemplateConent(date));
  } else {
    console.log('File already exists');
  }
})().catch(err => {
  console.error(err);
});
