'use strict'

export class ClientData {
  /**
   *
   * @param {Client} client
   */
  constructor (client) {
    /** @type {Client} */
    this.client = client

    /** @type {Map<id,SkeletonDefinition>} */
    this.skeletonDefinitions = new Map()

    /** @type {Map<id,Skeleton>} */
    this.skeletons = new Map()

    /** @type {Map<id,Pose>} */
    this.poses = new Map()
  }
}
