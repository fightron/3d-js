// @ts-check

'use strict'

export class Renderer {
  /**
   * Sets or removes the parent of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setParent () {
    throw new Error(`${this.constructor.name}#setParent is not implemented`)
  }

  /**
   * Sets the overall position (x, y, z) of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setPosition () {
    throw new Error(`${this.constructor.name}#setPosition is not implemented`)
  }

  /**
   * Sets the X position of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setPositionX () {
    throw new Error(`${this.constructor.name}#setPositionX is not implemented`)
  }

  /**
   * Sets the Y position of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setPositionY () {
    throw new Error(`${this.constructor.name}#setPositionY is not implemented`)
  }

  /**
   * Sets the X position of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setPositionZ () {
    throw new Error(`${this.constructor.name}#setPositionZ is not implemented`)
  }

  /**
   * Sets the Euler position of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setRotation () {
    throw new Error(`${this.constructor.name}#setRotation is not implemented`)
  }

  /**
   * Sets the quaternions of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setQuaternion () {
    throw new Error(`${this.constructor.name}#setQuaternion is not implemented`)
  }

  /**
   * Sets the overall scale (x, y, z) of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setScale () {
    throw new Error(`${this.constructor.name}#setScale is not implemented`)
  }

  /**
   * Sets the X scale of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setScaleX () {
    throw new Error(`${this.constructor.name}#setScaleX is not implemented`)
  }

  /**
   * Sets the Y scale of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setScaleY () {
    throw new Error(`${this.constructor.name}#setScaleY is not implemented`)
  }

  /**
   * Sets the X scale of a 3D object.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setScaleZ () {
    throw new Error(`${this.constructor.name}#setScaleZ is not implemented`)
  }

  /**
   * Sets Geometry#renderable.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setGeometryRenderable () {
    throw new Error(`${this.constructor.name}#setGeometryRenderable is not implemented`)
  }

  /**
   * Sets Skeleton#renderable.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setSkeletonRenderable () {
    throw new Error(`${this.constructor.name}#setSkeletonRenderable is not implemented`)
  }

  /**
   * Sets Joint#renderable.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setJointRenderable () {
    throw new Error(`${this.constructor.name}#setJointRenderable is not implemented`)
  }

  /**
   * Sets Material#renderable.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setMaterialRenderable () {
    throw new Error(`${this.constructor.name}#setMaterialRenderable is not implemented`)
  }

  /**
   * Sets Mesh#renderable.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setMeshRenderable () {
    throw new Error(`${this.constructor.name}#setMeshRenderable is not implemented`)
  }

  /**
   * Sets Light#renderable.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setLightRenderable () {
    throw new Error(`${this.constructor.name}#setLightRenderable is not implemented`)
  }

  /**
   * Sets Sound#renderable.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setSoundRenderable () {
    throw new Error(`${this.constructor.name}#setSoundRenderable is not implemented`)
  }

  /**
   * Sets Camera#renderable.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setCameraRenderable () {
    throw new Error(`${this.constructor.name}#setCameraRenderable is not implemented`)
  }

  /**
   * Sets Scene#renderable.
   * Must be defined in subclasses.
   *
   * @abstract
   */
  setSceneRenderable () {
    throw new Error(`${this.constructor.name}#setSceneRenderable is not implemented`)
  }
}
