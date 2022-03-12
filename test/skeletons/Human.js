'use strict'

import { expect } from '@dimensionalpocket/development'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'
import { Skeleton } from '../../src/Skeleton.js'

describe('skeletons/Human', function () {
  it('builds successfully', function () {
    var human = new Skeleton({ name: 'human', joints: HUMAN_SKELETON_JOINTS })
    expect(human.joints.size).to.eq(HUMAN_SKELETON_JOINTS.length)
  })
})
