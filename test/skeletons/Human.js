'use strict'

import { expect } from '@dimensionalpocket/development'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'
import { Client } from '../../src/Client.js'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'

describe('skeletons/Human', function () {
  it('builds successfully', function () {
    var client = new Client(new NullRenderer())

    /** @type {SkeletonDefinitionData} */
    var skeletonDefData = { id: 'human', joints: HUMAN_SKELETON_JOINTS }

    /** @type {SkeletonData} */
    var skeletonData = { id: 'test', definition: 'human' }

    client.feed('+', 'skeletonDefinitions', skeletonDefData)
    client.feed('+', 'skeletons', skeletonData)

    var human = client.data.skeletons.get('test')

    expect(human).to.exist
    expect(human?.joints.size).to.eq(HUMAN_SKELETON_JOINTS.length)
  })
})
