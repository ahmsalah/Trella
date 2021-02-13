import ObjectToQueryString from './ObjectToQueryString';

test('Turns an Object into Query String Parameters', () => {
  expect(ObjectToQueryString({ param1: 'val1', param2: 'val2' })).toBe('param1=val1&param2=val2');
});
