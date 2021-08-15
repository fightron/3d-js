// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { BuildThreeSkeleton } from '../../src/operations/BuildThreeSkeleton.js'
import { Skeleton } from '../../src/Skeleton.js'
import { Skeleton as Skeleton3 } from 'three/src/objects/Skeleton.js'
import { JointDefinition } from '../../src/JointDefinition.js'

describe('operations/BuildThreeSkeleton', function () {
  before(function () {
    this.skeleton = new Skeleton()
    var rootDef = new JointDefinition({ name: 'root' })
    var spine1Def = new JointDefinition({ name: 'spine1', parent: 'root' })
    var spine2Def = new JointDefinition({ name: 'spine2', parent: 'spine1' })
    this.skeleton.build([rootDef, spine1Def, spine2Def])
    var spine1 = this.skeleton.joints.get('spine1')
    spine1.position.y = 5
  })

  describe('#run', function () {
    before(function () {
      this.skeleton3 = BuildThreeSkeleton.run(this.skeleton)
    })

    it('returns a THREE.Skeleton instance', function () {
      expect(this.skeleton3).to.be.an.instanceof(Skeleton3)
    })

    it('generates the correct number of bones', function () {
      expect(this.skeleton3.bones.length).to.eq(3)
    })

    it('copies the position values', function () {
      expect(this.skeleton3.bones[1].position.y).to.eq(5)
    })
  })
})
