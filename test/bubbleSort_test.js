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

  context('should only accept arrays', function() {
    const a = "this is obviously not an aray"
    it('should err if the input is not an array', function(){
      expect(bubbleSort(a)).to.eql('input must be an array')
    })
  })
})
