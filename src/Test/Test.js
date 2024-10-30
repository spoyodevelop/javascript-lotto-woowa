import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
const runExceptionTest =
  (func) =>
  ({ description, input, expected, log }) => {
    test(description, () => {
      const logSpy = getLogSpy();
      const result = func(input);
      if (expected !== undefined) expect(result).toBe(expected);
      if (log)
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  };

export { runExceptionTest };
