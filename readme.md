# Lori Lunch Box Helper

This package aims to help me prepare meals. You can use the **meal-logs** folder to save meal details.

Each meal can have multiple foods. Each food can have a name and ingredients. You can also include information on whether your kids liked the specific food or not.

### Commands

* `pnpm run create:log`: Generate meal log in the meal-logs folder with default template.
* `pnpm run clean`: Remove build and Gemini generated markdown files.
* `/kids-meal-ideas`: Reads meal logs for the last 7 days and writes lunchbox and dinner ideas into `kids-meal-ideas.md`.
* `/shopping-list`: Uses the 7-day meal logs to generate a potential shopping list blueprint.

### Project Structure

```text
.
└── /
    ├── .gemini/        # Commands and skills
    ├── meal-logs/      # Daily meal records
    └── scripts/        # Utility scripts

```

### Meal Log Example

For the best AI results, use a structured format like this in your logs:

```markdown
## Date: 2026-02-18

### Lunch

* **Chicken Rice Ball**
* Ingredients: Chicken breast, Short-grain rice, Carrot.
* Kids Liked: Yes - finished everything.

* **Fruit & Snacks**
* Raspberry, Strawberry, Byron Bay Cookie, Pringles.

### Dinner
* **Braised Pork & Mantou**
* Ingredients: Pork belly, Soy sauce, Broccoli, Steamed Mantou buns.
* Kids Liked: Liked the pork, skipped the broccoli.
```

### Future Vision

I hope eventually to make a mobile app or leverage Openclaw to make this a service, so that I can use messages or voice control to record the meal logs and generate meal ideas.
