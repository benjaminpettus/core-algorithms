import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'


describe('bubbleSort()', function(){

  it('should be a function', function() {
    expect(bubbleSort).to.be.a('function')
  })

  it('should sort an array of numbers ', function() {
    const a = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    expect(bubbleSort(a)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
