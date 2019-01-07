import { getObject } from "../src/processer"

const testObject = {
  foo: {
    bar: {
      hoge: "piyo"
    }
  }
};

test('Find foo object', () => {
  expect(getObject(testObject, 0, 0, ['foo']))
  .toEqual({
      bar: {
        hoge: "piyo"
      }
    }
  );
});

test('Find bar object', () => {
  expect(getObject(testObject, 0, 1, ['foo', 'bar']))
  .toEqual({hoge: "piyo"});
});

test('Find hoge object', () => {
  expect(getObject(testObject, 0, 2, ['foo', 'bar', 'hoge']))
  .toEqual("piyo");
});

test('Return enpty', () => {
  expect(getObject(testObject, 0, 1, ['fooo']))
  .toBeUndefined;
});
