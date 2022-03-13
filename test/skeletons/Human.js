'use strict'

import { expect } from '@dimensionalpocket/development'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'
import { Client } from '../../src/Client.js'
import { SKELETONS, SKELETON_DEFS } from '../../src/operations/ClientCollections.js'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'

describe('skeletons/Human', function () {
  it('builds successfully', function () {
    var client = new Client(new NullRenderer())
    client.feed('+', SKELETON_DEFS, { id: 'human', j: HUMAN_SKELETON_JOINTS })
    client.feed('+', SKELETONS, { id: 'test', def: 'human' })

    var human = client.data.get(SKELETONS)?.get('test')

    expect(human).to.exist

    // @ts-ignore
    expect(human.joints.size).to.eq(HUMAN_SKELETON_JOINTS.length)
  })
})
