import { export } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', function(){

  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })

  it('should return the index of the number searched', function(){
    const a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch(a, 45)).to.eql(8)
  })

  context('input should be an array and a number', function(){

    it('first parameter should be an array', function(){
      expect(binarySearch(a, 45)).to.eql('first parameter should be an array')
    })
    it('second parameter should be an array', function(){
      expect(binarySearch(a, 45)).to.eql('first parameter should be an array')
    })
  })

})
