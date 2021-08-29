// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { HumanSkeleton, HUMAN_SKELETON_DEFINITIONS } from '../../src/skeletons/Human.js'

describe('skeletons/Human', function () {
  it('builds successfully', function () {
    var human = new HumanSkeleton()
    expect(human.joints.size).to.eq(HUMAN_SKELETON_DEFINITIONS.length)
  })
})
