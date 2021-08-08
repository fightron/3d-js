// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { JointDefinition } from '../src/JointDefinition.js'

describe('JointDefinition', function () {
  it('sets name', function () {
    var def = new JointDefinition('test', null)
    expect(def.name).to.eq('test')
  })

  it('sets parentName', function () {
    var def = new JointDefinition('test', 'parent')
    expect(def.parentName).to.eq('parent')
  })

  it('sets rotationOrder', function () {
    var def = new JointDefinition('test', null, undefined, undefined, 'XYZ')
    expect(def.rotationOrder).to.eq('XYZ')
  })

  context('position', function () {
    it('sets zero as defaults', function () {
      var def = new JointDefinition('test', null, undefined)
      expect(def.positionX).to.eq(0)
      expect(def.positionY).to.eq(0)
      expect(def.positionZ).to.eq(0)
    })

    it('sets positionX', function () {
      var def = new JointDefinition('test', null, { x: 1 })
      expect(def.positionX).to.eq(1)
    })

    it('sets positionY', function () {
      var def = new JointDefinition('test', null, { y: 2 })
      expect(def.positionY).to.eq(2)
    })

    it('sets positionZ', function () {
      var def = new JointDefinition('test', null, { z: 3 })
      expect(def.positionZ).to.eq(3)
    })
  })

  context('rotation limits', function () {
    it('sets Infinity as defaults', function () {
      var def = new JointDefinition('test', null)
      expect(def.minRotationX).to.eq(-Infinity)
      expect(def.minRotationY).to.eq(-Infinity)
      expect(def.minRotationZ).to.eq(-Infinity)
      expect(def.maxRotationX).to.eq(Infinity)
      expect(def.maxRotationY).to.eq(Infinity)
      expect(def.maxRotationZ).to.eq(Infinity)
    })

    it('sets minRotationX', function () {
      var def = new JointDefinition('test', null, undefined, { xMin: -1 })
      expect(def.minRotationX).to.eq(-1)
    })

    it('sets minRotationY', function () {
      var def = new JointDefinition('test', null, undefined, { yMin: -2 })
      expect(def.minRotationY).to.eq(-2)
    })

    it('sets minRotationZ', function () {
      var def = new JointDefinition('test', null, undefined, { zMin: -3 })
      expect(def.minRotationZ).to.eq(-3)
    })

    it('sets maxRotationX', function () {
      var def = new JointDefinition('test', null, undefined, { xMax: 1 })
      expect(def.maxRotationX).to.eq(1)
    })

    it('sets maxRotationY', function () {
      var def = new JointDefinition('test', null, undefined, { yMax: 2 })
      expect(def.maxRotationY).to.eq(2)
    })

    it('sets maxRotationZ', function () {
      var def = new JointDefinition('test', null, undefined, { zMax: 3 })
      expect(def.maxRotationZ).to.eq(3)
    })
  })
})
