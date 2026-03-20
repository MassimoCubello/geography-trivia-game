# City to Flag Match Game

A fast-paced browser game where the player matches city names to the correct country flags.

## How to run

1. Open `index.html` in your browser.
2. Select a difficulty: **Capital Cities**, **Normal Mode**, **Globe Trotter**, or **Atlas God**.
3. Choose the flag that matches the displayed city.
4. Click **Start Game**.

## Gameplay

- Each difficulty now uses a different city set, so challenges do not overlap.
- Pools are organized per difficulty, each with its own base pool and dedicated fill bank.
- Normal Mode focuses on easier, well-known cities.
- Globe Trotter focuses on slightly smaller populations and lesser-known countries.
- Atlas God focuses on the rarest and most obscure locations.
- Each game now has 20 questions per run.
- Capital Cities pool contains 150 city entries.
- Normal Mode, Globe Trotter, and Atlas God pools each contain 100 city entries.
- Every question now guarantees unique flag options (no duplicate country flags in the same set of choices).
- Capital Cities: 20 rounds, 4 choices, +10 correct, no penalty.
- Normal Mode: 20 rounds, 5 choices, +12 correct, -2 wrong.
- Globe Trotter: 20 rounds, 6 choices, +14 correct, -4 wrong.
- Atlas God: 20 rounds, 6 choices, +16 correct, -8 wrong.
- At the end, your final score and accuracy are shown.

## Files

- `index.html`: page structure
- `styles.css`: visual style and responsive layout
- `script.js`: game data and gameplay logic

