import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference.js'

describe('setSymmetricDifference()', function(){

  it('should be a function', function() {
    expect(setSymmetricDifference).to.be.a('function')
  })

  context('invalid input', function() {

    it('should return an error if either param is not an array', function() {
      const a = 'not an array'
      const b = [2, 4, 6, 8]
      expect(setSymmetricDifference(a, b)).to.eql('sets must be arrays')
    })
    it('should return an error if either param is not an array', function() {
      const a = [1, 2, 3, 4]
      const b = 'not an array either'
      expect(setSymmetricDifference(a, b)).to.eql('sets must be arrays')
    })

  })

  it('should return the symmetric difference of two sets', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setSymmetricDifference(a, b)).to.eql([1, 3, 6, 8])
  })
})
