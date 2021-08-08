// @ts-check

'use strict'

import { Joints } from './Joints.js'

export class Skeleton {
  constructor () {
    /** @type {Joints} */
    this.joints = new Joints(this)

    /** @type {Joint} */
    this.root = null

    /**
     * Usually a THREE Skeleton, but can be something else
     * depending on the rendering engine.
     */
    this.renderable = null
  }

  /**
   * Builds joints for specialized skeletons.
   * Must be overriden by subclasses, passing an array of definitions.
   * @param {Array<JointDefinition>} definitions
   */
  build (definitions) {
    for (var definition of definitions) {
      this.joints.create(definition)
    }
  }
}

/**
 * @typedef { import("./Joint").Joint } Joint
 * @typedef { import("./JointDefinition").JointDefinition } JointDefinition
 */
