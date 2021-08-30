// @ts-check

'use strict'

import { JointTransform } from './JointTransform.js'

/**
 * A Pose is a collection of JointTransform instances
 * that can be applied to an Skeleton instance to pose it.
 */
export class Pose {
  /**
   * @param {object} options
   * @param {string} [options.name] - Name of the pose (optional).
   * @param {SkeletonDefinition} options.skeletonDefinition - SkeletonDefinition instance to use. Required.
   * @param {Array<JointTransform>} options.transforms - An array of JointTransform instances.
   * @param {boolean} options.clear - When `true`, will reset the skeleton pose before applying transforms.
   */
  constructor ({ name = null, skeletonDefinition, transforms = [], clear = false }) {
    /** @type {?string} */
    this.name = name

    /** @type {SkeletonDefinition} */
    this.skeletonDefinition = skeletonDefinition

    /** @type {Array<JointTransform>} */
    this.transforms = transforms

    /** @type {boolean} */
    this.clear = clear
  }

  /**
   * Applies this pose to an skeleton.
   * @param {Skeleton} skeleton
   */
  apply (skeleton) {
    //
  }
}

/**
 * @typedef { import("./Skeleton").Skeleton } Skeleton
 * @typedef { import("./SkeletonDefinition").SkeletonDefinition } SkeletonDefinition
 */
