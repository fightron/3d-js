// @ts-check

'use strict'

import { Skeleton as Skeleton3 } from 'three/src/objects/Skeleton.js'
import { Joints } from './Joints.js'

export class Skeleton {
  constructor () {
    /** @type {Joints} */
    this.joints = new Joints(this)

    /** @type {Joint} */
    this.root = this.joints.root

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
