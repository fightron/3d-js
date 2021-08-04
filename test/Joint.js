// @ts-check

'use strict'

import { expect, sinon } from '@dimensionalpocket/development'
import { Joint } from '../src/Joint.js'
import { Skeleton } from '../src/Skeleton.js'

describe('Joint', function () {
  before(function () {
    this.skeleton = new Skeleton()
  })

  describe('constructor', function () {
    it('throws an error without a name', function () {
      expect(_ => new Joint(null, this.skeleton)).to.throw(/name is required/)
    })

    it('throws an error without a skeleton', function () {
      expect(_ => new Joint('test', null)).to.throw(/skeleton is required/)
    })
  })
})
