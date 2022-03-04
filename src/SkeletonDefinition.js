// @ts-check

'use strict'

export class SkeletonDefinition {
  /**
   * @param {object} options
   * @param {string} options.name - Name of this skeleton.
   * @param {Array<JointDefinition>} options.joints - Array of JointDefinition instances that define this skeleton.
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
    this.joints = joints
  }
}

/**
 * @typedef { import("./JointDefinition").JointDefinition } JointDefinition
 */
