// @ts-check

'use strict'

import { ClientCollections } from './operations/ClientCollections.js'

export class Client {
  /**
   * @param {Renderer} renderer
   */
  constructor (renderer) {
    if (!renderer) {
      throw new Error('Client: renderer is required')
    }

    this.renderer = renderer

    /** @type {Map<Map>} */
    this.data = ClientCollections.generate()
  }

  feed (/* args */) {

  }
}

/**
 * @typedef { import("./Pose").Pose } Pose
 * @typedef { import("./Renderer").Renderer } Renderer
 * @typedef { import("./Skeleton").Skeleton } Skeleton
 * @typedef { import("./SkeletonDefinition").SkeletonDefinition } SkeletonDefinition
 */
