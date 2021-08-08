// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { Volume } from '../src/Volume.js'

describe('Volume', function () {
  it('initializes with zero values as defaults', function () {
    var vol = new Volume()
    expect(vol.width).to.eq(0)
    expect(vol.height).to.eq(0)
    expect(vol.depth).to.eq(0)
    expect(vol.translationX).to.eq(0)
    expect(vol.translationY).to.eq(0)
    expect(vol.translationZ).to.eq(0)
  })

  it('sets width', function () {
    var vol = new Volume({ width: 1 })
    expect(vol.width).to.eq(1)
  })

  it('sets height', function () {
    var vol = new Volume({ height: 2 })
    expect(vol.height).to.eq(2)
  })

  it('sets depth', function () {
    var vol = new Volume({ depth: 3 })
    expect(vol.depth).to.eq(3)
  })

  it('sets translationX', function () {
    var vol = new Volume(undefined, { x: 1 })
    expect(vol.translationX).to.eq(1)
  })

  it('sets translationY', function () {
    var vol = new Volume(undefined, { y: 2 })
    expect(vol.translationY).to.eq(2)
  })

  it('sets translationZ', function () {
    var vol = new Volume(undefined, { z: 3 })
    expect(vol.translationZ).to.eq(3)
  })

  it('sets color', function () {
    var vol = new Volume(undefined, undefined, 'red')
    expect(vol.color).to.eq('red')
  })
})
