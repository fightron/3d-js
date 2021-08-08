// @ts-check

'use strict'

import { Skeleton as Skeleton3 } from 'three/src/objects/Skeleton.js'

export class BuildThreeSkeleton {
  /**
   * Returns a Skeleton instance from Three,
   * based on a Skeleton from this lib.
   * @param {Skeleton} skeleton
   */
  static run (skeleton) {
    var bones = [...skeleton.joints.values()]
    return new Skeleton3(bones)
  }
}

/**
 * @typedef { import("../Skeleton").Skeleton } Skeleton
 */
