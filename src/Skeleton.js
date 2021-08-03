// @ts-check

'use strict'

import { Joints } from './Joints.js'

export class Skeleton {
  constructor () {
    this.joints = new Joints(this)
    this.root = this.joints.root
    this.build()
  }

  /**
   * Builds joints for specialized skeletons.
   * @abstract Must be implemented in subclasses.
   */
  build () {}
}
