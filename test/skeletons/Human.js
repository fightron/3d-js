'use strict'

import { expect } from '@dimensionalpocket/development'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'
import { Client } from '../../src/Client.js'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'
import { ClientAddSkeletonDefinition } from '../../src/operations/ClientAddSkeletonDefinition.js'
import { ClientAddSkeleton } from '../../src/operations/ClientAddSkeleton.js'

describe('skeletons/Human', function () {
  it('builds successfully', function () {
    var client = new Client(new NullRenderer())

    ClientAddSkeletonDefinition.run(client, { id: 'human', joints: HUMAN_SKELETON_JOINTS })
    ClientAddSkeleton.run(client, { id: 'test', definition: 'human' })

    var human = client.data.skeletons.get('test')

    expect(human).to.exist
    expect(human?.joints.size).to.eq(HUMAN_SKELETON_JOINTS.length)
  })
})
