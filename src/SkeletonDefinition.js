// @ts-check

'use strict'

import { JointDefinition } from './JointDefinition.js'

export class SkeletonDefinition {
  /**
   * @param {SkeletonDefinitionOptions} options
   */
  constructor ({ id, joints }) {
    /**
     * Skeleton ID.
     *
     * @type {string|number}
     */
    this.id = id

    /**
     * Array of joint definitions.
     *
     * @type {Array<JointDefinition>}
     */
    this.joints = []
    for (var jointDefOpts of joints) {
      this.joints.push(new JointDefinition(jointDefOpts))
    }
  }

  /**
   * Returns a joint definition by ID.
   *
   * @param {string} id - ID of the joint
   * @returns {?JointDefinition}
   */
  getJointDefinition (id) {
    for (var jointDef of this.joints) {
      if (jointDef.id === id) return jointDef
    }

    return null
  }
}
