// @ts-check

'use strict'

import { Joints } from './Joints.js'

export class Skeleton {
  constructor () {
    /** @type {Joints} */
    this.joints = new Joints(this)

    /** @type {Joint} */
    this.root = this.joints.root

    /**
     * Usually a THREE Skeleton, but can be something else
     * depending on the rendering engine.
     */
    this.renderable = null

    this.build()
  }

  /**
   * Builds joints for specialized skeletons.
   * @abstract Must be implemented in subclasses.
   */
  build () {}
}

/**
 * @typedef { import("./Joint").Joint } Joint
 */
