import { ReversePipe } from './reverse.pipe'

describe('ReversePipe', () => {
  it('should reverse the string', () => {
    const pipe = new ReversePipe()
    expect(pipe.transform('angular')).toEqual('ralugna')
  })
})
