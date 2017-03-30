import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', function(){

  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })

  it('should return the index of the number searched', function(){
    const a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    const n = 45
    expect(binarySearch(a, n)).to.equal(8)
  })

  context('input should be an array and a number', function(){

    it('first parameter should be an array', function(){
      const a = 'not an array'
      const n = 45
      expect(binarySearch(a, n)).to.eql('incorrect input type')
    })
    it('second parameter should be an integer', function(){
      const a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
      const n = 'not an integer'
      expect(binarySearch(a, n)).to.eql('incorrect input type')
    })
  })

})
