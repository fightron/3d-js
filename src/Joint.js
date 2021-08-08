// @ts-check

'use strict'

// https://github.com/mrdoob/three.js/blob/master/src/objects/Bone.js
import { Bone } from 'three/src/objects/Bone.js'

/**
 * A Joint is a 3D point in space with a name that belongs to a
 * skeleton instance and have degrees of freedom.
 */
export class Joint extends Bone {
  /**
   * @param {JointDefinition} definition - JointDefinition instance to create the joint off of.
   */
  constructor (definition) {
    if (!definition) {
      throw new Error('Joint: definition is required')
    }

    super()

    /** @type {JointDefinition} */
    this.definition = definition

    /**
     * Usually a THREE Mesh, but can be something else
     * depending on the rendering engine.
     */
    this.renderable = null
  }
}

/**
 * @typedef { import("./JointDefinition").JointDefinition } JointDefinition
 */
