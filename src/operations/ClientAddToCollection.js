'use strict'

import { ClientAddSkeleton } from './ClientAddSkeleton.js'
import { ClientAddSkeletonDefinition } from './ClientAddSkeletonDefinition.js'

export class ClientAddToCollection {
  /**
   * @param {Client} client
   * @param {string} collectionName
   * @param {any} message
   * @returns {boolean}
   */
  static run (client, collectionName, message) {
    if (collectionName === 'skeletons') {
      return ClientAddSkeleton.run(client, message)
    }

    if (collectionName === 'skeletonDefinitions') {
      return ClientAddSkeletonDefinition.run(client, message)
    }

    console.error('ClientAddToCollection: unhandled collection name', collectionName)
    return false
  }
}
