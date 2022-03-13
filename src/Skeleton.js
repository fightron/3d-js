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
   * @param {SkeletonDefinition} definition - Skeleton definition.
   */
  constructor (definition) {
    super()

    /**
     * The definition of this skeleton, containing ID, joint data, etc.
     *
     * @type {SkeletonDefinition}
     */
    this.definition = definition

    /**
     * Array of joint instances (including root).
     * These joints can be manipulated.
     *
     * @type {Joints}
     */
    this.joints = new Joints(this)

    /**
     * An object to be rendered by an engine.
     *
     * @type {object}
     */
    this.renderable = null

    this.build()
  }

  /**
   * Builds joints for specialized skeletons.
   */
  build () {
    var jointDefinitions = this.definition.joints
    for (var definition of jointDefinitions) {
      this.joints.create(definition)
    }
  }
}
