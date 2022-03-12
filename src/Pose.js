// @ts-check

'use strict'

import { JointTransform } from './JointTransform.js'
import { POSE_RESET_EVENT } from './Skeleton.js'

/**
 * A Pose is a collection of JointTransform instances
 * that can be applied to an Skeleton instance to pose it.
 */
export class Pose {
  /**
   * @typedef {Object} JointTransformOptions - options for initializing JointTransform instances.
   * @property {string} joint - Joint name.
   * @property {number} [rotationX]
   * @property {number} [rotationY]
   * @property {number} [rotationZ]
   */

  /**
   * @param {object} options
   * @param {string} [options.name] - Name of the pose (optional).
   * @param {SkeletonDefinition} options.skeletonDefinition - SkeletonDefinition instance to use. Required.
   * @param {Array<JointTransformOptions>} options.transforms - An array of object literals for creating joint transforms.
   * @param {boolean} options.clear - When `true`, will reset the skeleton pose before applying transforms.
   */
  constructor ({ name = null, skeletonDefinition, transforms = [], clear = false }) {
    if (!skeletonDefinition) {
      throw new Error('Pose: skeleton definition is required')
    }

    /** @type {?string} */
    this.name = name

    /** @type {SkeletonDefinition} */
    this.skeletonDefinition = skeletonDefinition

    /** @type {Array<JointTransform>} */
    this.transforms = transforms.map(t => {
      var jointDef = skeletonDefinition.getJointDefinition(t.joint)
      var transform = new JointTransform({
        jointDefinition: jointDef,
        rotationX: t.rotationX,
        rotationY: t.rotationY,
        rotationZ: t.rotationZ
      })
      return transform
    })

    /** @type {boolean} */
    this.clear = clear
  }

  /**
   * Applies this pose to an skeleton.
   *
   * @param {Skeleton} skeleton
   */
  apply (skeleton) {
    if (this.clear) {
      skeleton.emit(POSE_RESET_EVENT, skeleton)
    }

    for (var transform of this.transforms) {
      transform.apply(skeleton)
    }
  }
}