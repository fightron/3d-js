// @ts-check

'use strict'

import { expect, sinon } from '@dimensionalpocket/development'
import { Joint } from '../src/Joint.js'

import { Skeleton } from '../src/Skeleton.js'

describe('Joints', function () {
  before(function () {
    this.skeleton = new Skeleton()
    this.joints = this.skeleton.joints
  })

  describe('constructor', function () {
    it('assigns #skeleton', function () {
      expect(this.joints.skeleton).to.eq(this.skeleton)
    })

    it('creates the root joint', function () {
      expect(this.joints.root).to.be.an.instanceof(Joint)
      expect(this.joints.root.name).to.eq('root')
    })
  })

  describe('#create', function () {
    before(function () {
      this.spine = this.joints.create('spine')
    })

    it('returns a Joint', function () {
      expect(this.spine).to.be.an.instanceof(Joint)
    })

    it('sets the joint name', function () {
      expect(this.spine.name).to.eq('spine')
    })

    it('creates a new joint', function () {
      expect(this.joints.get('spine')).to.eq(this.spine)
    })

    it('sets the root as parent', function () {
      expect(this.spine.parent).to.eq(this.joints.root)
    })

    context('when a parent is given', function () {
      before(function () {
        this.spine2 = this.joints.create('spine2', this.spine)
      })

      it('sets the parent', function () {
        expect(this.spine2.parent).to.eq(this.spine)
      })
    })

    context('when another joint with the same name already exists', function () {
      it('raises an error', function () {
        expect(_ => this.joints.create('spine')).to.throw(/a joint with that name already exists/)
      })
    })

    context('when there are no joints in the collection', function () {
      before(function () {
        this.joints.clear()
        this.root = null
      })

      context("when the name is not 'root'", function () {
        it('raises an error', function () {
          expect(_ => this.joints.create('not-root')).to.throw(/first joint must be named 'root'/)
        })
      })

      context("when the name is 'root'", function () {
        before(function () {
          this.root = this.joints.create('root')
        })

        it('creates the root joint', function () {
          expect(this.root).to.be.an.instanceof(Joint)
          expect(this.root.name).to.eq('root')
        })
      })
    })
  })
})
