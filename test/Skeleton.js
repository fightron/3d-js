'use strict'

import { expect } from '@dimensionalpocket/development'

import { Skeleton } from '../src/Skeleton.js'
import { SkeletonDefinition } from '../src/SkeletonDefinition.js'
import { Joints } from '../src/Joints.js'
import { JointDefinition } from '../src/JointDefinition.js'

describe('Skeleton', function () {
  before(function () {
    this.skeletonDef = new SkeletonDefinition({
      name: 'test',
      joints: [
        new JointDefinition({ name: 'root' }),
        new JointDefinition({ name: 'spine', parent: 'root', position: { y: 5 } })
      ]
    })
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

      it('creates joints based on definition', function () {
        expect(this.skeleton.joints.get('root')).to.exist
        expect(this.skeleton.joints.get('spine')).to.exist
      })

      it('sets hierarchy', function () {
        expect(this.skeleton.joints.get('root').parent).to.eq(null)
        expect(this.skeleton.joints.get('spine').parent).to.eq(this.skeleton.joints.get('root'))
      })
    })
  })
})
