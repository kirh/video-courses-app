import { DurationPipe } from './duration.pipe';

describe('DurationPipePipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert 0 seconds to duration', () => {
    expect(pipe.transform(0)).toBe('0h 0min');
  });

  it('should convert 60 seconds to duration', () => {
    expect(pipe.transform(60)).toBe('0h 1min');
  });

  it('should convert 3600 seconds to duration', () => {
    expect(pipe.transform(3600)).toBe('1h 0min');
  });

  it('should convert 3601 seconds to duration', () => {
    expect(pipe.transform(3601)).toBe('1h 0min');
  });

});
