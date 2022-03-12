// @ts-check

'use strict'

import { JointDefinition } from './JointDefinition.js'

export class SkeletonDefinition {
  /**
   * @param {SkeletonDefinitionOptions} options
   */
  constructor ({ name, joints }) {
    /**
     * Skeleton name.
     *
     * @type {string}
     */
    this.name = name

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
   * Returns a joint definition by name.
   *
   * @param {string} name - name of the joint
   * @returns {?JointDefinition}
   */
  getJointDefinition (name) {
    for (var jointDef of this.joints) {
      if (jointDef.name === name) return jointDef
    }

    return null
  }
}
