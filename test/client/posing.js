'use strict'

import fs from 'fs'

import { expect } from '@dimensionalpocket/development'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'
import { Client } from '../../src/Client.js'

// Generate human.json in data folder
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'
import { ClientAddToCollection } from '../../src/operations/ClientAddToCollection.js'

describe('Client#feed(T) [Posing]', function () {
  before(function () {
    this.renderer = new NullRenderer()
    this.client = new Client(this.renderer)

    ClientAddToCollection.run(this.client, 'skeletonDefinitions', { id: 'human', joints: HUMAN_SKELETON_JOINTS })
    ClientAddToCollection.run(this.client, 'skeletons', { id: 'test-skeleton', def: 'human' })
    ClientAddToCollection.run(this.client, 'poses', {
      id: 'testPose',
      skeleton: 'human',
      transforms: [
        { joint: 'lKn', rotationX: 1 }
      ]
    })
  })

  it.skip('poses the skeleton', function () {
    // TODO
    expect(true).to.eq(true)
  })
})
