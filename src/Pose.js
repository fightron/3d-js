'use strict'

import { JointTransform } from './JointTransform.js'
import { POSE_RESET_EVENT } from './Skeleton.js'

/**
 * A Pose is a collection of JointTransform instances
 * that can be applied to an Skeleton instance to pose it.
 */
export class Pose {
  /**
   * @param {object} options
   * @param {string} options.id - ID of the pose. Required.
   * @param {SkeletonDefinition} options.skeletonDefinition - SkeletonDefinition instance to use. Required.
   * @param {Array<JointTransformData>} options.transforms - An array of object literals for creating joint transforms.
   * @param {boolean} [options.clear] - When `true`, will reset the skeleton pose before applying transforms.
   */
  constructor ({ id, skeletonDefinition, transforms = [], clear = false }) {
    if (!skeletonDefinition) {
      throw new Error('Pose: skeleton definition is required')
    }

    /** @type {string} */
    this.id = id

    /** @type {SkeletonDefinition} */
    this.skeletonDefinition = skeletonDefinition

    /** @type {Array<JointTransform>} */
    this.transforms = []

    var jointDef
    for (var t of transforms) {
      jointDef = skeletonDefinition.getJointDefinition(t.joint)
      if (jointDef) {
        this.transforms.push(new JointTransform({
          jointDefinition: jointDef,
          rotation: t.rotation
        }))
      }
    }

    /** @type {boolean} */
    this.clear = clear
  }

  /**
   * Applies this pose to an skeleton.
   *
   * @param {Skeleton} skeleton
   */
  applyToSkeleton (skeleton) {
    if (this.clear) {
      skeleton.emit(POSE_RESET_EVENT, skeleton)
    }

    for (var transform of this.transforms) {
      transform.applyToSkeleton(skeleton)
    }
  }
}
