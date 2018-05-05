'use strict';

describe('Map', () => {
    test('order does not matter with string', () => {
        const example = new Map([
            ['one', 1],
            ['two', 2],
            ['three', 3],
        ]);

        const expected = new Map([
            ['three', 3],
            ['one', 1],
            ['two', 2],
        ]);

        expect(example).toEqual(expected);
    });

test('order does not matter with arrayed keys', () => {
    const example = new Map([
        [['one'], 1],
        [['two'], 2],
        [['three'], 3],
    ]);

    const expected = new Map([
        [['three'], 3],
        [['one'], 1],
        [['two'], 2],
    ]);

    expect(example).toEqual(expected);
});

    test('order does not matter with arrayed values', () => {
        const example = new Map([
            ['one', [1]],
            ['two', [2]],
            ['three', [3]],
        ]);

        const expected = new Map([
            ['three', [3]],
            ['one', [1]],
            ['two', [2]],
        ]);

        expect(example).toEqual(expected);
    });

    test('order does not matter with arrays with multiple array keys equal', () => {
        const example = new Map([
            [['one'], 1],
            [['two'], 2],
            [['three'], 3],
            [['three'], 4],
        ]);

        const expected = new Map([
            [['three'], 3],
            [['three'], 4],
            [['one'], 1],
            [['two'], 2],
        ]);

        expect(example).toEqual(expected);
    });
});

describe('Set', () => {
    test('order does not matter with string', () => {
        const example = new Set([
            'one',
            'two',
            'three',
        ]);

        const expected = new Set([
            'three',
            'one',
            'two',
        ]);

        expect(example).toEqual(expected);
    });

test('order does not matter with arrays', () => {
    const example = new Set([
        ['one'],
        ['two'],
        ['three'],
    ]);

    const expected = new Set([
        ['three'],
        ['one'],
        ['two'],
    ]);

    expect(example).toEqual(expected);
});

    test('order does not matter with arrays with multiple arrays equal', () => {
        const example = new Set([
            ['one'],
            ['two'],
            ['three'],
            ['three'],
        ]);

        const expected = new Set([
            ['three'],
            ['one'],
            ['three'],
            ['two'],
        ]);

        expect(example).toEqual(expected);
    });
});
