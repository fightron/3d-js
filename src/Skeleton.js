// @ts-check

'use strict'

import { Joints } from './Joints.js'

export class Skeleton {
  /**
   * Creates a skeleton instance which joints can be manipulated.
   * @param {SkeletonDefinition} definition - Skeleton definition.
   */
  constructor (definition) {
    /**
     * The definition of this skeleton, containing name, joint data, etc.
     * @type {SkeletonDefinition}
     */
    this.definition = definition

    /**
     * Array of joint instances (including root).
     * These joints can be manipulated.
     * @type {Joints}
     */
    this.joints = new Joints(this)

    /**
     * The root joint of this skeleton.
     * @type {Joint}
     */
    this.root = null

    /**
     * Usually a THREE Skeleton, but can be something else
     * depending on the rendering engine.
     * @type {object}
     */
    this.renderable = null
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

/**
 * @typedef { import("./Joint").Joint } Joint
 * @typedef { import("./SkeletonDefinition").SkeletonDefinition } SkeletonDefinition
 */
