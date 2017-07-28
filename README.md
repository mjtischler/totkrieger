## Totkrieger
### A terrible game
<br>
Hey y'all, I'm making a game! It's going to be bad so you shouldn't play it. As of this README, I have little design direction and I'm mostly using this as an excuse to build a full-stack application from the ground up.

#### Technology

I'm utilizing React Redux for the user interface and state management. I have other long-term technology plans for this project, and I'll update this README as I accomplish my goals (or add others):

- [x] Utilize ES6
- [x] React for interactive components
- [x] Redux for state management
- [x] Standard for JavaScript styling
- [ ] A library for responsiveness, or roll my own flexbox solution
- [ ] An HTML framework
- [ ] Express as a web framework
- [ ] A DB solution for data persistence

#### Goals
- [x] Create a `class` for both enemy and player characters and populate them on state load
- [x] Randomly choose an enemy from a list of available enemies
- [x] Perform a round of attacks utilizing armor and attack modifiers
- [x] Reduce combatant hit points based on the results of the attack round
- [x] Mark an unmodified random roll of `1` as a critical miss and apply damage to the attacker
- [x] Declare when a battle is over and disable further interaction
- [ ] Incorporate rudimentary graphics
- [ ] Build an attack grid for multiple combatants
- [ ] Allow users to customize their player character
- [ ] Allow users to choose their attack type
- [ ] Add varied enemy attacks and intelligently apply them
- [ ] Add loot drops that _feel amazing_
- [ ] Make the experience mildly fun

#### Installation

From Bash:

`git clone git@github.com:mjtischler/totkrieger.git`

`cd totkrieger`

`git pull origin develop`

`npm install`

`npm run start`

In your browser, navigate to `http://localhost:3000/`

To lint using Standard:

`npm run lint` (NOTE: This and `npm run lint-fix` will produce an error but still function properly)

To autofix linter issues with Standard:

`npm run lint-fix`
