'use strict'

import { Renderer } from '../Renderer.js'

/**
 * Renderer that no-ops and returns `true` for all methods.
 * Used for headless clients and testing.
 */
export class NullRenderer extends Renderer {
  /**
   * @param {any} _renderable
   * @param {any} _parent
   */
  setParent (_renderable, _parent) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   */
  setPosition (_renderable, _x, _y, _z) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {number} _x
   */
  setPositionX (_renderable, _x) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {number} _y
   */
  setPositionY (_renderable, _y) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {number} _z
   */
  setPositionZ (_renderable, _z) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   */
  setRotation (_renderable, _x, _y, _z) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {string} _order
   */
  setRotationOrder (_renderable, _order) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   * @param {number} _w
   */
  setQuaternion (_renderable, _x, _y, _z, _w) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   */
  setScale (_renderable, _x, _y, _z) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {number} _x
   */
  setScaleX (_renderable, _x) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {number} _y
   */
  setScaleY (_renderable, _y) {
    return true
  }

  /**
   * @param {any} _renderable
   * @param {any} _z
   */
  setScaleZ (_renderable, _z) {
    return true
  }

  /**
   * @param {Geometry} _geometry
   */
  setGeometryRenderable (_geometry) {
    return true
  }

  /**
   * @param {Skeleton} skeleton
   */
  setSkeletonRenderable (skeleton) {
    skeleton.renderable = { id: skeleton.id }
    return true
  }

  /**
   * @param {Joint} joint
   */
  setJointRenderable (joint) {
    joint.renderable = { id: joint.definition.id }
    return true
  }

  /**
   * @param {Material} _material
   */
  setMaterialRenderable (_material) {
    return true
  }

  /**
   * @param {Mesh} _mesh
   */
  setMeshRenderable (_mesh) {
    return true
  }

  /**
   * @param {Light} _light
   */
  setLightRenderable (_light) {
    return true
  }

  /**
   * @param {Sound} _sound
   */
  setSoundRenderable (_sound) {
    return true
  }

  /**
   * @param {Camera} _camera
   */
  setCameraRenderable (_camera) {
    return true
  }

  /**
   * @param {Scene} _scene
   */
  setSceneRenderable (_scene) {
    return true
  }
}
