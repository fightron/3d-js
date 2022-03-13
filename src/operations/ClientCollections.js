'use strict'

export const ANIMATIONS = 'ani'
export const CAMERAS = 'cam'
export const GEOMETRIES = 'geo'
export const LIGHTS = 'lit'
export const MATERIALS = 'mat'
export const MESHES = 'msh'
export const POSES = 'pose'
export const SKELETONS = 'skt'
export const SKELETON_DEFS = 'sktD'
export const SOUNDS = 'snd'

export class ClientCollections {
  /**
   * Returns a fresh map of collections to be used on a new client.
   *
   * @returns {ClientCollectionType}
   */
  static generate () {
    var data = new Map()

    /** @type {Map<id,Animation3D>} */
    var animations = new Map()

    /** @type {Map<id,Camera>} */
    var cameras = new Map()

    /** @type {Map<id,Geometry>} */
    var geometries = new Map()

    /** @type {Map<id,Light>} */
    var lights = new Map()

    /** @type {Map<id,Material>} */
    var materials = new Map()

    /** @type {Map<id,Mesh>} */
    var meshes = new Map()

    /** @type {Map<id,Pose>} */
    var poses = new Map()

    /** @type {Map<id,Skeleton>} */
    var skeletons = new Map()

    /** @type {Map<id,SkeletonDefinition>} */
    var skeletonDefs = new Map()

    /** @type {Map<id,Sound>} */
    var sounds = new Map()

    data.set(ANIMATIONS, animations)
    data.set(CAMERAS, cameras)
    data.set(GEOMETRIES, geometries)
    data.set(LIGHTS, lights)
    data.set(MATERIALS, materials)
    data.set(MESHES, meshes)
    data.set(POSES, poses)
    data.set(SKELETONS, skeletons)
    data.set(SKELETON_DEFS, skeletonDefs)
    data.set(SOUNDS, sounds)

    return data
  }
}
