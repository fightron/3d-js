'use strict'

// import fs from 'fs'

import { expect, sinon } from '@dimensionalpocket/development'
import { Client } from '../../src/Client.js'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'
import { HUMAN_SKELETON_JOINTS } from '../../data/skeleton-definitions/human.js'

describe('e2e/client-posing', function () {
  before(function () {
    this.renderer = new NullRenderer()
    this.client = new Client(this.renderer)

    /** @type {SkeletonDefinitionData} */
    var skeletonDefData = { id: 'human', joints: HUMAN_SKELETON_JOINTS }

    /** @type {SkeletonData} */
    var skeletonData = { id: 'test-skeleton', definition: 'human' }

    /** @type {PoseData} */
    var poseData = {
      id: 'test-pose',
      skeleton: 'human',
      transforms: [
        { joint: 'lKn', rotation: { x: 1 } },
        { joint: 'N', rotation: { y: 3, z: -2 } }
      ]
    }

    this.client.feed('+', 'skeletonDefinitions', skeletonDefData)
    this.client.feed('+', 'skeletons', skeletonData)
    this.client.feed('+', 'poses', poseData)

    this.skeleton = this.client.data.skeletons.get('test-skeleton')

    sinon.stub(this.renderer, 'setRotation')
  })

  after(function () {
    this.renderer.setRotation.restore()
  })

  it('poses the skeleton', function () {
    var joints = this.skeleton.joints
    this.client.feed('T', 'test-skeleton', 'test-pose')

    var knee = joints.get('lKn').renderable
    var neck = joints.get('N').renderable

    expect(knee).to.exist
    expect(neck).to.exist

    expect(this.renderer.setRotation).to.have.been.calledWith(knee, 1, 0, 0)
    expect(this.renderer.setRotation).to.have.been.calledWith(neck, 0, 3, -2)
  })
})
