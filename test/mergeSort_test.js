import { expect } from 'chai'
import mergeSort from '../src/mergeSort'


describe('mergeSort()', function() {

  it('should be a function', function() {
    expect(mergeSort).to.be.a('function')
  })

  context('invalid input', function(){
    it('should only accept an array', function() {
      const a = 'will it accept this?'
      expect(mergeSort(a)).to.eql('input can only be an array')
    })

    it('should only accept an array', function() {
      const a = 9393938
      expect(mergeSort(a)).to.eql('input can only be an array')
    })
  })

  it('should sort an array of numbers using merge sort algorithm', function() {
    const a = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    expect(mergeSort(a)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
