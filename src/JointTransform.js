// @ts-check

'use strict'

import { JOINT_TRANSFORM_EVENT } from './Skeleton.js'

export class JointTransform {
  /**
   * @param {object} opts
   * @param {JointDefinition} opts.jointDefinition
   * @param {number} [opts.rotationX]
   * @param {number} [opts.rotationY]
   * @param {number} [opts.rotationZ]
   */
  constructor ({ jointDefinition, rotationX = 0.0, rotationY = 0.0, rotationZ = 0.0 }) {
    /** @type {JointDefinition} */
    this.definition = jointDefinition

    /** @type {number} */
    this.rotationX = rotationX

    /** @type {number} */
    this.rotationY = rotationY

    /** @type {number} */
    this.rotationZ = rotationZ
  }

  /**
   * Applies this transform to a skeleton's joint.
   *
   * @param {Skeleton} skeleton
   * @returns {boolean}
   */
  apply (skeleton) {
    var def = this.definition
    var joint = skeleton.joints.get(def.name)

    if (!joint) {
      console.error('JointTransform#apply: joint not found in skeleton', skeleton.definition.name, def.name)
      return false
    }

    // Tell the Client/Renderer that the joint has been updated,
    // since the joint instance doesn't hold any transforms.
    skeleton.emit(JOINT_TRANSFORM_EVENT, joint, this.rotationX, this.rotationY, this.rotationZ)
  }
}

/**
 * @typedef { import("./JointDefinition").JointDefinition } JointDefinition
 * @typedef { import("./Skeleton").Skeleton } Skeleton
 */
