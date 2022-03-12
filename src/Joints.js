// @ts-check

'use strict'

import { Joint } from './Joint.js'

/**
 * A collection that associates joints to a skeleton.
 */
export class Joints extends Map {
  /**
   * @param {Skeleton} skeleton - Skeleton instance this joint collection belongs to.
   */
  constructor (skeleton) {
    if (!skeleton) {
      throw new Error('Joints: skeleton is required')
    }

    super()

    /** @type {Skeleton} */
    this.skeleton = skeleton
  }

  /**
   * Creates a Joint instance from a definition and adds the joint to this collection.
   *
   * @param {JointDefinition} definition - JointDefinition to create the joint off of
   * @return {Joint} - the created Joint
   */
  create (definition) {
    if (!definition) {
      throw new Error('Joints#create: definition is required')
    }

    var name = definition.name

    var existing = this.get(name)
    if (existing) {
      throw new Error(`Joints#create(${name}): a joint with that name already exists`)
    }

    var parent = null
    var parentName = definition.parent

    if (parentName) {
      parent = this.get(parentName)
      if (!parent) {
        throw new Error(`Joints#create(${name}): parent named "${parentName}" not found in collection`)
      }
    }

    if (this.size > 0 && !parent) {
      throw new Error(`Joints#create(${name}): parent required when collection is not empty`)
    }

    var joint = new Joint(definition)

    if (parent) {
      joint.parent = parent
    }

    this.set(definition.name, joint)

    return joint
  }
}
