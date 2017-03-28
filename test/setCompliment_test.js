import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe('setCompliment()', function () {

  it('should be a function', function(){
    expect(setCompliment).to.be.a('function')
  })

  context('incorrect input', function() {

    it('should err if either inputs arent arrays', function() {
      const a = "what"
      const b = [2, 4, 6, 8]
      expect(setCompliment(a, b)).to.eql("sets must be arrays")
    })

    it('should err if either inputs arent arrays', function() {
      const a = [1, 2, 3, 4]
      const b = "definitely not an array"
      expect(setCompliment(a, b)).to.eql("sets must be arrays")
    })
  })

  it('should return the compliment of two sets', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setCompliment(a, b)).to.eql([6, 8])
  })
})
