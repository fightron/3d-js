// @ts-check

'use strict'

import { Joint } from './Joint.js'

/**
 * A collection of Joints that belong to a skeleton.
 * It initializes with a root joint.
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
    this.skeleton = skeleton
    this.root = this.create('root')
  }

  /**
   * Creates a Joint instance, assigns it to the skeleton
   * from this collection, then adds the joint to this collection.
   * @param {string} name - name of the joint to create
   * @param {Joint} [parent] - parent joint
   */
  create (name, parent = null) {
    if (!name) {
      throw new Error('Joints#create: name is required')
    }

    var existing = this.get(name)
    if (existing) {
      throw new Error(`Joints#create(${name}): a joint with that name already exists`)
    }

    if (this.size === 0 && name !== 'root') {
      throw new Error(`Joints#create(${name}): first joint must be named 'root'`)
    }

    if (this.size > 0 && !parent) {
      parent = this.root
    }

    var joint = new Joint(name, this.skeleton)

    if (parent) {
      joint.parent = parent
    }

    this.set(joint.name, joint)

    return joint
  }
}

/**
 * @typedef { import("./Skeleton").Skeleton } Skeleton
 */
