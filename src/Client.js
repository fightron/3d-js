'use strict'

import { ClientData } from './ClientData.js'
import { ClientReceiveMessage } from './operations/ClientReceiveMessage.js'

export class Client {
  /**
   * @param {Renderer} renderer
   */
  constructor (renderer) {
    if (!renderer) {
      throw new Error('Client: renderer is required')
    }

    /** @type {Renderer} */
    this.renderer = renderer

    /** @type {ClientData} */
    this.data = new ClientData(this)
  }

  /**
   * Feeds a message into the client.
   *
   * @param  {...any} args - Either a single array, or spread arguments.
   * @returns {boolean}
   */
  feed (...args) {
    var message

    if (Array.isArray(args[0])) {
      message = args[0]
    } else {
      message = args
    }

    return ClientReceiveMessage.run(this, message)
  }

  /**
   * Called when a skeleton instance emits a pose reset event.
   *
   * @param {Skeleton} skeleton
   */
  onPoseReset (skeleton) {
    // TODO - Renderer reset pose
  }

  /**
   * Called when a joint is transformed by a pose.
   *
   * @param {Joint} joint
   * @param {Vector3} rotation
   * @param {Skeleton} _skeleton
   */
  onJointTransform (joint, rotation, _skeleton) {
    this.renderer.setRotation(joint.renderable, rotation.x, rotation.y, rotation.z)
  }
}
