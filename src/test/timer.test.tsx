'use strict';
import {timerGame} from '../timer'

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('wait 1 second before ending the game', () => {
    timerGame();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),1000);
});