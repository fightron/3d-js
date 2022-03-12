// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { JointVolume } from '../src/JointVolume.js'

describe('JointVolume', function () {
  it('sets defaults', function () {
    var vol = new JointVolume()
    expect(vol.width).to.eq(0.0)
    expect(vol.height).to.eq(0.0)
    expect(vol.depth).to.eq(0.0)
    expect(vol.translationX).to.eq(0.0)
    expect(vol.translationY).to.eq(0.0)
    expect(vol.translationZ).to.eq(0.0)
    expect(vol.color).to.eq('white')
  })

  it('sets width', function () {
    var vol = new JointVolume({ width: 1 })
    expect(vol.width).to.eq(1)
  })

  it('sets height', function () {
    var vol = new JointVolume({ height: 2 })
    expect(vol.height).to.eq(2)
  })

  it('sets depth', function () {
    var vol = new JointVolume({ depth: 3 })
    expect(vol.depth).to.eq(3)
  })

  it('sets translationX', function () {
    var vol = new JointVolume({ translationX: 1 })
    expect(vol.translationX).to.eq(1)
  })

  it('sets translationY', function () {
    var vol = new JointVolume({ translationY: 2 })
    expect(vol.translationY).to.eq(2)
  })

  it('sets translationZ', function () {
    var vol = new JointVolume({ translationZ: 3 })
    expect(vol.translationZ).to.eq(3)
  })

  it('sets color', function () {
    var vol = new JointVolume({ color: 'red' })
    expect(vol.color).to.eq('red')
  })
})
