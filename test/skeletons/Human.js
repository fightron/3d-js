'use strict'

import { expect } from '@dimensionalpocket/development'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'
import { Skeleton } from '../../src/Skeleton.js'
import { SkeletonDefinition } from '../../src/SkeletonDefinition.js'

describe('skeletons/Human', function () {
  it('builds successfully', function () {
    var def = new SkeletonDefinition({ id: 'human', joints: HUMAN_SKELETON_JOINTS })
    var human = new Skeleton({ id: 'test', definition: def })
    expect(human.joints.size).to.eq(HUMAN_SKELETON_JOINTS.length)
  })
})
