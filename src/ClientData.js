'use strict'

import { ClientAddPose } from './operations/ClientAddPose.js'
import { ClientAddSkeleton } from './operations/ClientAddSkeleton.js'
import { ClientAddSkeletonDefinition } from './operations/ClientAddSkeletonDefinition.js'

export class ClientData {
  /**
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

  /**
   * @param {string} collectionName
   * @param {any} data
   * @returns {boolean}
   */
  add (collectionName, data) {
    if (collectionName === 'skeletons') {
      return ClientAddSkeleton.run(this.client, data)
    }

    if (collectionName === 'poses') {
      return ClientAddPose.run(this.client, data)
    }

    if (collectionName === 'skeletonDefinitions') {
      return ClientAddSkeletonDefinition.run(this.client, data)
    }

    console.error('Client#data#add: unhandled collection name', collectionName)
    return false
  }
}
