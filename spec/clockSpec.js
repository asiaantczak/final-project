describe('Clock', function() {
  let clock;
  let soundSpy = jasmine.createSpyObj('soundSpy', ['playSound']);
  let gridViewSpy = jasmine.createSpyObj('gridView', ['drawGrid', 'update']);

  beforeEach(function() {
    clock = new Clock(soundSpy, gridViewSpy);
  });

  it('has a step of 0 as default', function() {
    expect(clock.step).toEqual(0);
  });

  it('has an intervalDuration of 500 and a bpm of 120 as default', function() {
    expect(clock.intervalDuration).toEqual(500);
    expect(clock.bpm).toEqual(120);
  });

  describe('incrementIntervalDuration', function() {
    it('should decrement bpm by 5', function() {
      clock.incrementIntervalDuration();
      expect(clock.bpm).toEqual(115);
      expect(clock.intervalDuration).toEqual(521.7391304347826);
    });

    it('should increment bpm by 5', function() {
      clock.decrementIntervalDuration();
      expect(clock.bpm).toEqual(125);
      expect(clock.intervalDuration).toEqual(480);
    });

    it('should not decrement below 50 bpm', function() {
      clock.bpm = 55;
      clock.incrementIntervalDuration();
      clock.incrementIntervalDuration();
      expect(clock.bpm).toEqual(50);
    });

    it('should not increment above 300 BPM', function() {
      clock.bpm = 295;
      clock.decrementIntervalDuration();
      clock.decrementIntervalDuration();
      expect(clock.bpm).toEqual(300);
    });
  });

  describe('_play', function() {
    it('plays a sound', function() {
      clock._play(1);
      expect(soundSpy.playSound).toHaveBeenCalled();
    })
  })
});
