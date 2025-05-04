import { Team } from "../app";

describe ('Team', () => {
    let team;
    let char1;
    let char2;
    let char3;

    beforeEach(() => {
        team = new Team();
        char1 = { name: 'Игрок 1' };
        char2 = { name: 'Игрок 2' };
        char3 = { name: 'Игрок 3' };
    });

    test('add добавляет нового игрока', () => {
        team.add(char1);
        expect(team.members.has(char1)).toBe(true);
        expect(team.members.size).toBe(1);
    });

    test('add выбрасывает ошибка при добавлении повторного игрока', () => {
        team.add(char1);
        expect(() => team.add(char1)).toThrow('Игрок уже в команде');
    });

    test('addAll добавляет несколько игроков', () => {
        team.addAll(char1, char2);
        expect(team.members.has(char1)).toBe(true);
        expect(team.members.has(char2)).toBe(true);
        expect(team.members.size).toBe(2);
    });

    test('addAll не добавляет дубликаты и не выбрасывает ошибку', () => {
        team.add(char1);
        expect(() => team.addAll(char1, char2)).not.toThrow();
        expect(team.members.has(char1)).toBe(true);
        expect(team.members.has(char2)).toBe(true);
        expect(team.members.size).toBe(2);
    });

    test('toArray возвращает массив игроков', () => {
        team.addAll(char1, char2, char3);
        const arr = team.toArray();
        expect(Array.isArray(arr)).toBe(true);
        expect(arr).toHaveLength(3);
        expect(arr).toEqual(expect.arrayContaining([char1, char2, char3]));
    });

    test('toArray возвращает пустой массив, если игроков нет', () => {
        expect(team.toArray()).toEqual([]);
    });
    
})