import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should order by title', () => {
    const items = [{title: '3'}, {title: '2'}, {title: '4'}];
    const sorted = [{title: '2'}, {title: '3'}, {title: '4'}];
    expect(pipe.transform(items, 'title')).toEqual(sorted);
  });

  it('should order by title in reverse order', () => {
    const items = [{title: '3'}, {title: '2'}, {title: '4'}];
    const sorted = [{title: '4'}, {title: '3'}, {title: '2'}];
    expect(pipe.transform(items, 'title', true)).toEqual(sorted);
  });
});
