'use strict'

import fs from 'fs'

import { expect } from '@dimensionalpocket/development'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'
import { Client } from '../../src/Client.js'
import { POSES, SKELETONS, SKELETON_DEFS } from '../../src/operations/ClientCollections.js'

// Generate human.json in data folder
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'

describe('Client#feed(T) [Posing]', function () {
  before(function () {
    this.renderer = new NullRenderer()
    this.client = new Client(this.renderer)

    this.client.feed('+', SKELETON_DEFS, { id: 'human', joints: HUMAN_SKELETON_JOINTS })
    this.client.feed('+', SKELETONS, { id: 'test-skeleton', def: 'human' })
    this.client.feed('+', POSES, {
      id: 'testPose',
      skeleton: 'human',
      transforms: [
        { joint: 'lKn', rotationX: 1 }
      ]
    })
  })

  it('poses the skeleton', function () {
    // TODO
    expect(true).to.eq(true)
  })
})
