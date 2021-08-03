// @ts-check

'use strict'

import { expect, sinon } from '@dimensionalpocket/development'
import { Joint } from '../src/Joint.js'
import { Joints } from '../src/Joints.js'

import { Skeleton } from '../src/Skeleton.js'

describe('Skeleton', function () {
  before(function () {
    this.build = sinon.spy(Skeleton.prototype, 'build')
    this.skeleton = new Skeleton()
  })

  after(function () {
    this.build.restore()
  })

  describe('constructor', function () {
    it('calls #build', function () {
      expect(this.build).to.have.been.called
    })

    describe('#joints', function () {
      it('is an instance of Joints', function () {
        expect(this.skeleton.joints).to.be.an.instanceof(Joints)
      })

      it('links back to skeleton', function () {
        expect(this.skeleton.joints.skeleton).to.eq(this.skeleton)
      })

      it('initializes the root joint', function () {
        expect(this.skeleton.root).to.eq(this.skeleton.joints.root)
      })
    })
  })
})
