'use strict'

import { expect } from '@dimensionalpocket/development'
import { Joint } from '../src/Joint.js'
import { JointDefinition } from '../src/JointDefinition.js'
import { Joints } from '../src/Joints.js'

import { Skeleton } from '../src/Skeleton.js'

describe('Joints', function () {
  before(function () {
    this.skeleton = new Skeleton({ name: 'test', joints: [] })
    this.joints = this.skeleton.joints
  })

  describe('constructor', function () {
    it('assigns #skeleton', function () {
      expect(this.joints.skeleton).to.eq(this.skeleton)
    })

    it('throws an error without a skeleton', function () {
      expect(_ => new Joints(null)).to.throw(/skeleton is required/)
    })
  })

  describe('#create', function () {
    before(function () {
      this.rootDef = new JointDefinition({ name: 'root' })
      this.root = this.joints.create(this.rootDef)
      this.spineDef = new JointDefinition({ name: 'spine', parent: 'root' })
      this.spine = this.joints.create(this.spineDef)
    })

    it('returns a Joint', function () {
      expect(this.spine).to.be.an.instanceof(Joint)
    })

    it('sets the joint definition', function () {
      expect(this.spine.definition).to.eq(this.spineDef)
    })

    it('assigns joint to collection', function () {
      expect(this.joints.get('spine')).to.eq(this.spine)
    })

    it('sets the parent when present', function () {
      expect(this.root.parent).to.eq(null)
      expect(this.spine.parent).to.eq(this.root)
    })

    it('throws an error without a definition', function () {
      expect(_ => this.joints.create(null)).to.throw(/definition is required/)
    })

    it('throws an error when another joint with the same name already exists', function () {
      expect(_ => this.joints.create(this.spineDef)).to.throw(/a joint with that name already exists/)
    })

    it("throws an error when the parent name doesn't exist in collection", function () {
      var invalidDef = new JointDefinition({ name: 'spine3', parent: 'invalid-joint' })
      expect(_ => this.joints.create(invalidDef)).to.throw(/parent named "invalid-joint" not found in collection/)
    })

    it('throws an error when collection is not empty and a definition without parent is given', function () {
      var invalidDef = new JointDefinition({ name: 'spine3' })
      expect(_ => this.joints.create(invalidDef)).to.throw(/parent required when collection is not empty/)
    })
  })
})
