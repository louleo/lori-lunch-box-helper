import * as path from 'node:path';
import * as fs from 'node:fs';

const MEAL_IDEAS = path.join(__dirname, '..', 'kids-meal-ideas.md');
const SHOPPING_LIST = path.join(__dirname, '..', 'shopping-list.md');

[MEAL_IDEAS, SHOPPING_LIST].forEach(p => {
  if (fs.existsSync(p)) {
    fs.rmSync(p);
  }
});
