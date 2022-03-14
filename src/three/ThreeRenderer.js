'use strict'

import * as THREE from 'three'
import { Renderer } from '../Renderer.js'

export class ThreeRenderer extends Renderer {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor (canvas) {
    if (!canvas) {
      throw new Error('ThreeRenderer: canvas element is required')
    }

    super()
    this.canvas = canvas
    this.container = canvas.parentElement
  }

  /**
   * Sets or removes the parent of a THREE object.
   *
   * @param {THREE.Object3D} renderable
   * @param {?THREE.Object3D} [parentRenderable]
   * @returns {boolean}
   */
  setParent (renderable, parentRenderable = null) {
    renderable.parent = parentRenderable

    return true
  }

  /**
   * Sets the renderable of a skeleton to a THREE Skeleton
   * with bones based on the skeleton's definition.
   *
   * @param {Skeleton} skeleton
   */
  setSkeletonRenderable (skeleton) {
    /** @type {Array<JointRenderable>} */
    var bones = []

    /** @type {JointRenderable} */
    var bone

    /** @type {Joint|undefined} */
    var parentJoint

    /** @type {IterableIterator<Joint>} */
    var joints = skeleton.joints.values() // TODO: optimize

    for (var joint of joints) {
      this.setJointRenderable(joint)

      bone = joint.renderable

      parentJoint = joint.parent

      if (parentJoint) {
        // For this to work, parent joints must be defined
        // before its children in the skeleton definition.
        // @ts-ignore
        this.setParent(bone, parentJoint.renderable)
      }

      bones.push(bone)
    }

    // @ts-ignore
    var skeleton3 = new THREE.Skeleton(bones)
    skeleton.renderable = skeleton3

    return true
  }

  /**
   * Sets Joint#renderable with a THREE.Bone based on the joint definition.
   *
   * @param {Joint} joint
   */
  setJointRenderable (joint) {
    var bone = new THREE.Bone()

    var bPos = bone.position
    var dPos = joint.definition.position

    bPos.x = dPos.x
    bPos.y = dPos.y
    bPos.z = dPos.z

    joint.renderable = bone

    return true
  }
}
