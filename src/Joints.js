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

    var id = definition.id

    var existing = this.get(id)
    if (existing) {
      throw new Error(`Joints#create(${id}): a joint with that ID already exists`)
    }

    var parent = null
    var parentId = definition.parent

    if (parentId) {
      parent = this.get(parentId)
      if (!parent) {
        throw new Error(`Joints#create(${id}): parent named "${parentId}" not found in collection`)
      }
    }

    if (this.size > 0 && !parent) {
      throw new Error(`Joints#create(${id}): parent required when collection is not empty`)
    }

    var joint = new Joint(definition)

    if (parent) {
      joint.parent = parent
    }

    this.set(definition.id, joint)

    return joint
  }
}
