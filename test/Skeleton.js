// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { Joints } from '../src/Joints.js'

import { Skeleton } from '../src/Skeleton.js'
import { SkeletonDefinition } from '../src/SkeletonDefinition.js'

describe('Skeleton', function () {
  before(function () {
    this.skeletonDef = new SkeletonDefinition({ name: 'test', joints: [] })
    this.skeleton = new Skeleton(this.skeletonDef)
  })

  describe('constructor', function () {
    describe('#joints', function () {
      it('is an instance of Joints', function () {
        expect(this.skeleton.joints).to.be.an.instanceof(Joints)
      })

      it('links back to skeleton', function () {
        expect(this.skeleton.joints.skeleton).to.eq(this.skeleton)
      })
    })
  })
})
