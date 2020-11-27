import { DurationPipe } from './duration.pipe';

describe('DurationPipePipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert 0 minutes to duration', () => {
    expect(pipe.transform(0)).toBe('0 min');
  });

  it('should convert 60 minutes to duration', () => {
    expect(pipe.transform(60)).toBe('1 h 0 min');
  });

  it('should convert 3600 seconds to duration', () => {
    expect(pipe.transform(61)).toBe('1 h 1 min');
  });

  it('should convert 3601 seconds to duration', () => {
    expect(pipe.transform(55)).toBe('55 min');
  });

});
