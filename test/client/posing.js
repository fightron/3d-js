'use strict'

// import fs from 'fs'

import { expect } from '@dimensionalpocket/development'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'
import { Client } from '../../src/Client.js'
import { ClientAddSkeleton } from '../../src/operations/ClientAddSkeleton.js'
import { ClientAddSkeletonDefinition } from '../../src/operations/ClientAddSkeletonDefinition.js'

// Generate human.json in data folder
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'
import { ClientAddPose } from '../../src/operations/ClientAddPose.js'

describe('Client#feed(T) [Posing]', function () {
  before(function () {
    this.renderer = new NullRenderer()
    this.client = new Client(this.renderer)

    ClientAddSkeletonDefinition.run(this.client, { id: 'human', joints: HUMAN_SKELETON_JOINTS })
    ClientAddSkeleton.run(this.client, { id: 'test-skeleton', definition: 'human' })
    ClientAddPose.run(this.client, {
      id: 'testPose',
      skeleton: 'human',
      transforms: [
        { joint: 'lKn', rotation: { x: 1 } }
      ]
    })
  })

  it('poses the skeleton', function () {
    // TODO
    expect(true).to.eq(true)
  })
})
