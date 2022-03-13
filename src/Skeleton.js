'use strict'

import EventEmitter from 'eventemitter3'
import { Joints } from './Joints.js'

// Joints do not carry transforms. Skeletons emit transform events
// that the Client/Renderer will listen to and apply transforms.
export const POSE_RESET_EVENT = 'pose-reset'
export const JOINT_TRANSFORM_EVENT = 'joint-transform'

export class Skeleton extends EventEmitter {
  /**
   * Creates a skeleton instance which joints can be manipulated.
   *
   * @param {object} options
   * @param {number|string} options.id - Skeleton instance ID.
   * @param {SkeletonDefinition} options.definition - Skeleton definition.
   */
  constructor ({ id, definition }) {
    if (!id) {
      throw new Error('Skeleton: ID is required')
    }

    if (!definition) {
      throw new Error('Skeleton: definition is required')
    }

    super()

    /**
     * Skeleton instance ID.
     *
     * @type {number|string}
     */
    this.id = id

    /**
     * The definition of this skeleton, containing definition ID, joint data, etc.
     *
     * @type {SkeletonDefinition}
     */
    this.definition = definition

    /**
     * Array of joint instances (including root).
     *
     * @type {Joints}
     */
    this.joints = new Joints(this)

    /**
     * An object to be rendered by an engine.
     *
     * @type {object|undefined}
     */
    this.renderable = undefined

    this.build()
  }

  build () {
    var jointDefinitions = this.definition.joints
    for (var definition of jointDefinitions) {
      this.joints.create(definition)
    }
  }
}
