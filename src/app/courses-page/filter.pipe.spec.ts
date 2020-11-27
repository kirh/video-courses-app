import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {

  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter by title part ignoring case', () => {
    const objects = [{title: 'courseOne'}, {title: 'courseTwo'}];
    const filtered = [{title: 'courseTwo'}];
    expect(pipe.transform(objects, 'title', 't')).toEqual(filtered);
  });
});
