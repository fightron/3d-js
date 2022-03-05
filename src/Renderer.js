// @ts-check

'use strict'

export class Renderer {
  /**
   * Sets or removes the parent of a renderable.
   *
   * @param {any} _renderable
   * @param {any} _parent
   * @returns {boolean}
   * @abstract
   */
  setParent (_renderable, _parent) {
    console.error(`${this.constructor.name}#setParent is not implemented`)
    return false
  }

  /**
   * Sets the overall position (x, y, z) of a renderable.
   *
   * @param {any} _renderable
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   * @returns {boolean}
   * @abstract
   */
  setPosition (_renderable, _x, _y, _z) {
    console.error(`${this.constructor.name}#setPosition is not implemented`)
    return false
  }

  /**
   * Sets the X position of a renderable.
   *
   * @param {any} _renderable
   * @param {number} _x
   * @returns {boolean}
   * @abstract
   */
  setPositionX (_renderable, _x) {
    console.error(`${this.constructor.name}#setPositionX is not implemented`)
    return false
  }

  /**
   * Sets the Y position of a renderable.
   *
   * @param {any} _renderable
   * @param {number} _y
   * @returns {boolean}
   * @abstract
   */
  setPositionY (_renderable, _y) {
    console.error(`${this.constructor.name}#setPositionY is not implemented`)
    return false
  }

  /**
   * Sets the Z position of a renderable.
   *
   * @param {any} _renderable
   * @param {number} _z
   * @returns {boolean}
   * @abstract
   */
  setPositionZ (_renderable, _z) {
    console.error(`${this.constructor.name}#setPositionZ is not implemented`)
    return false
  }

  /**
   * Sets the Euler rotation of a renderable.
   *
   * @param {any} _renderable
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   * @returns {boolean}
   * @abstract
   */
  setRotation (_renderable, _x, _y, _z) {
    console.error(`${this.constructor.name}#setRotation is not implemented`)
    return false
  }

  /**
   * Sets the Euler rotation order of a renderable.
   *
   * @param {any} _renderable
   * @param {string} _order
   * @returns {boolean}
   * @abstract
   */
  setRotationOrder (_renderable, _order) {
    console.error(`${this.constructor.name}#setRotationOrder is not implemented`)
    return false
  }

  /**
   * Sets the quaternions of a renderable.
   *
   * @param {any} _renderable
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   * @param {number} _w
   * @returns {boolean}
   * @abstract
   */
  setQuaternion (_renderable, _x, _y, _z, _w) {
    console.error(`${this.constructor.name}#setQuaternion is not implemented`)
    return false
  }

  /**
   * Sets the overall scale (x, y, z) of a renderable.
   *
   * @param {any} _renderable
   * @param {number} _x
   * @param {number} _y
   * @param {number} _z
   * @returns {boolean}
   * @abstract
   */
  setScale (_renderable, _x, _y, _z) {
    console.error(`${this.constructor.name}#setScale is not implemented`)
    return false
  }

  /**
   * Sets the X scale of a renderable.
   *
   * @param {any} _renderable
   * @param {number} _x
   * @returns {boolean}
   * @abstract
   */
  setScaleX (_renderable, _x) {
    console.error(`${this.constructor.name}#setScaleX is not implemented`)
    return false
  }

  /**
   * Sets the Y scale of a renderable.
   *
   * @param {any} _renderable
   * @param {number} _y
   * @returns {boolean}
   * @abstract
   */
  setScaleY (_renderable, _y) {
    console.error(`${this.constructor.name}#setScaleY is not implemented`)
    return false
  }

  /**
   * Sets the Z scale of a renderable.
   *
   * @param {any} _renderable
   * @param {any} _z
   * @returns {boolean}
   * @abstract
   */
  setScaleZ (_renderable, _z) {
    console.error(`${this.constructor.name}#setScaleZ is not implemented`)
    return false
  }

  /**
   * Sets Geometry#renderable.
   *
   * @param {Geometry} _geometry
   * @returns {boolean}
   * @abstract
   */
  setGeometryRenderable (_geometry) {
    console.error(`${this.constructor.name}#setGeometryRenderable is not implemented`)
    return false
  }

  /**
   * Sets Skeleton#renderable.
   *
   * @param {Skeleton} _skeleton
   * @returns {boolean}
   * @abstract
   */
  setSkeletonRenderable (_skeleton) {
    console.error(`${this.constructor.name}#setSkeletonRenderable is not implemented`)
    return false
  }

  /**
   * Sets Joint#renderable.
   *
   * @param {Joint} _joint
   * @returns {boolean}
   * @abstract
   */
  setJointRenderable (_joint) {
    console.error(`${this.constructor.name}#setJointRenderable is not implemented`)
    return false
  }

  /**
   * Sets Material#renderable.
   *
   * @param {Material} _material
   * @returns {boolean}
   * @abstract
   */
  setMaterialRenderable (_material) {
    console.error(`${this.constructor.name}#setMaterialRenderable is not implemented`)
    return false
  }

  /**
   * Sets Mesh#renderable.
   *
   * @param {Mesh} _mesh
   * @returns {boolean}
   * @abstract
   */
  setMeshRenderable (_mesh) {
    console.error(`${this.constructor.name}#setMeshRenderable is not implemented`)
    return false
  }

  /**
   * Sets Light#renderable.
   *
   * @param {Light} _light
   * @returns {boolean}
   * @abstract
   */
  setLightRenderable (_light) {
    console.error(`${this.constructor.name}#setLightRenderable is not implemented`)
    return false
  }

  /**
   * Sets Sound#renderable.
   *
   * @param {Sound} _sound
   * @returns {boolean}
   * @abstract
   */
  setSoundRenderable (_sound) {
    console.error(`${this.constructor.name}#setSoundRenderable is not implemented`)
    return false
  }

  /**
   * Sets Camera#renderable.
   *
   * @param {Camera} _camera
   * @returns {boolean}
   * @abstract
   */
  setCameraRenderable (_camera) {
    console.error(`${this.constructor.name}#setCameraRenderable is not implemented`)
    return false
  }

  /**
   * Sets Scene#renderable.
   *
   * @param {Scene} _scene
   * @returns {boolean}
   * @abstract
   */
  setSceneRenderable (_scene) {
    console.error(`${this.constructor.name}#setSceneRenderable is not implemented`)
    return false
  }
}

/**
 * @typedef { import("./Skeleton").Skeleton } Skeleton
 * @typedef { import("./Joint").Joint } Joint
 * @typedef { import("./Geometry").Geometry } Geometry
 * @typedef { import("./Material").Material } Material
 * @typedef { import("./Mesh").Mesh } Mesh
 * @typedef { import("./Light").Light } Light
 * @typedef { import("./Camera").Camera } Camera
 * @typedef { import("./Sound").Sound } Sound
 * @typedef { import("./Scene").Scene } Scene
 */
