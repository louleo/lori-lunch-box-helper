---
name: read-meal-logs
description: Read the meal logs from the meal-logs directory to understand recent eating habits. Use this skill when the user asks about what they have eaten recently or wants a summary of their meals.
---

# Read Meal Logs

This skill allows you to read the meal logs stored in the `meal-logs` directory.

## How to use

To read the meal logs, execute the `read-meal-logs.ts` script using `tsx`. You can specify the number of days (most recent logs) as an argument.

### Example

To read the last 3 days of meal logs:

```bash
pnpx tsx .gemini/skills/read-meal-logs/scripts/read-meal-logs.ts 3
```

If no argument is provided, it defaults to the last 7 days.

## Workflow

1.  Identify if the user is asking about their past meals.
2.  Determine the number of days requested (default to 7).
3.  Run the script to fetch the logs.
4.  Analyze the logs and provide the information or summary to the user.
