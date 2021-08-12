// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { JointDefinition } from '../src/JointDefinition.js'
import { Volume } from '../src/Volume.js'

describe('JointDefinition', function () {
  it('sets name', function () {
    var def = new JointDefinition({ name: 'test' })
    expect(def.name).to.eq('test')
  })

  it('sets parentName', function () {
    var def = new JointDefinition({ name: 'test', parent: 'parent' })
    expect(def.parentName).to.eq('parent')
  })

  it('sets rotationOrder', function () {
    var def = new JointDefinition({ name: 'test', rotationOrder: 'XYZ' })
    expect(def.rotationOrder).to.eq('XYZ')
  })

  it('sets a volume if given', function () {
    var volume = new Volume()
    var def = new JointDefinition({ name: 'test', volume })
    expect(def.volume).to.eq(volume)
  })

  context('position', function () {
    it('sets zero as defaults', function () {
      var def = new JointDefinition({ name: 'test' })
      expect(def.positionX).to.eq(0)
      expect(def.positionY).to.eq(0)
      expect(def.positionZ).to.eq(0)
    })

    it('sets positionX', function () {
      var def = new JointDefinition({ name: 'test', position: { x: 1 } })
      expect(def.positionX).to.eq(1)
      expect(def.positionY).to.eq(0)
      expect(def.positionZ).to.eq(0)
    })

    it('sets positionY', function () {
      var def = new JointDefinition({ name: 'test', position: { y: 2 } })
      expect(def.positionY).to.eq(2)
      expect(def.positionX).to.eq(0)
      expect(def.positionZ).to.eq(0)
    })

    it('sets positionZ', function () {
      var def = new JointDefinition({ name: 'test', position: { z: 3 } })
      expect(def.positionZ).to.eq(3)
      expect(def.positionX).to.eq(0)
      expect(def.positionY).to.eq(0)
    })
  })

  context('rotation limits', function () {
    it('sets Infinity as defaults', function () {
      var def = new JointDefinition({ name: 'test' })
      expect(def.minRotationX).to.eq(-Infinity)
      expect(def.minRotationY).to.eq(-Infinity)
      expect(def.minRotationZ).to.eq(-Infinity)
      expect(def.maxRotationX).to.eq(Infinity)
      expect(def.maxRotationY).to.eq(Infinity)
      expect(def.maxRotationZ).to.eq(Infinity)
    })

    it('sets minRotationX', function () {
      var def = new JointDefinition({ name: 'test', limits: { xMin: -1 } })
      expect(def.minRotationX).to.eq(-1)
      expect(def.minRotationY).to.eq(-Infinity)
      expect(def.minRotationZ).to.eq(-Infinity)
      expect(def.maxRotationX).to.eq(Infinity)
      expect(def.maxRotationY).to.eq(Infinity)
      expect(def.maxRotationZ).to.eq(Infinity)
    })

    it('sets minRotationY', function () {
      var def = new JointDefinition({ name: 'test', limits: { yMin: -2 } })
      expect(def.minRotationY).to.eq(-2)
      expect(def.minRotationX).to.eq(-Infinity)
      expect(def.minRotationZ).to.eq(-Infinity)
      expect(def.maxRotationX).to.eq(Infinity)
      expect(def.maxRotationY).to.eq(Infinity)
      expect(def.maxRotationZ).to.eq(Infinity)
    })

    it('sets minRotationZ', function () {
      var def = new JointDefinition({ name: 'test', limits: { zMin: -3 } })
      expect(def.minRotationZ).to.eq(-3)
      expect(def.minRotationX).to.eq(-Infinity)
      expect(def.minRotationY).to.eq(-Infinity)
      expect(def.maxRotationX).to.eq(Infinity)
      expect(def.maxRotationY).to.eq(Infinity)
      expect(def.maxRotationZ).to.eq(Infinity)
    })

    it('sets maxRotationX', function () {
      var def = new JointDefinition({ name: 'test', limits: { xMax: 1 } })
      expect(def.maxRotationX).to.eq(1)
      expect(def.minRotationX).to.eq(-Infinity)
      expect(def.minRotationY).to.eq(-Infinity)
      expect(def.minRotationZ).to.eq(-Infinity)
      expect(def.maxRotationY).to.eq(Infinity)
      expect(def.maxRotationZ).to.eq(Infinity)
    })

    it('sets maxRotationY', function () {
      var def = new JointDefinition({ name: 'test', limits: { yMax: 2 } })
      expect(def.maxRotationY).to.eq(2)
      expect(def.minRotationX).to.eq(-Infinity)
      expect(def.minRotationY).to.eq(-Infinity)
      expect(def.minRotationZ).to.eq(-Infinity)
      expect(def.maxRotationX).to.eq(Infinity)
      expect(def.maxRotationZ).to.eq(Infinity)
    })

    it('sets maxRotationZ', function () {
      var def = new JointDefinition({ name: 'test', limits: { zMax: 3 } })
      expect(def.maxRotationZ).to.eq(3)
      expect(def.minRotationX).to.eq(-Infinity)
      expect(def.minRotationY).to.eq(-Infinity)
      expect(def.minRotationZ).to.eq(-Infinity)
      expect(def.maxRotationX).to.eq(Infinity)
      expect(def.maxRotationY).to.eq(Infinity)
    })
  })
})
