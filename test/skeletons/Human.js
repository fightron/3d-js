'use strict'

import { expect } from '@dimensionalpocket/development'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'
import { Client } from '../../src/Client.js'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'
import { ClientAddToCollection } from '../../src/operations/ClientAddToCollection.js'

describe('skeletons/Human', function () {
  it('builds successfully', function () {
    var client = new Client(new NullRenderer())
    ClientAddToCollection.run(client, 'skeletonDefinitions', { id: 'human', joints: HUMAN_SKELETON_JOINTS })
    ClientAddToCollection.run(client, 'skeletons', { id: 'test', definition: 'human' })

    var human = client.data.skeletons.get('test')

    expect(human).to.exist
    expect(human?.joints.size).to.eq(HUMAN_SKELETON_JOINTS.length)
  })
})
