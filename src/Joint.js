'use strict'

/**
 * A Joint is a 3D point in space with an ID that belongs to a skeleton instance.
 */
export class Joint {
  /**
   * @param {JointDefinition} definition - JointDefinition instance to create the joint off of.
   */
  constructor (definition) {
    if (!definition) {
      throw new Error('Joint: definition is required')
    }

    /** @type {Joint|undefined} */
    this.parent = undefined

    /** @type {JointDefinition} */
    this.definition = definition

    /**
     * An object that can be rendered by an engine.
     *
     * @type {object|undefined}
     */
    this.renderable = undefined
  }
}
