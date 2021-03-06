import operate from '../components/operate';
import numbers from '../components/numbers';
import operators from '../components/operators';

const object = {
  total: numbers[8],
  next: numbers[4],
  operation: operators[3],
};

describe('executes calculate function', () => {
  it('returns a total value', () => {
    const total = operate(String(object.total), String(object.next), object.operation);
    expect(total).toBe('2');
  });

  it('does not return a wrong total value', () => {
    const total = operate(String(object.total), String(object.next), object.operation);
    expect(total).not.toBe('3');
  });
});
