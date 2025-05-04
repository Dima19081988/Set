// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error ('Игрок уже в команде');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        for (const character of characters) {
            if (!this.members.has(character)) {
                this.members.add(character);
            };
        };
    }

    toArray() {
        return [...this.members];
    }
}