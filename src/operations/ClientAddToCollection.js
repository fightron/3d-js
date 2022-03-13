'use strict'

import { ClientAddSkeletonDefinition } from './ClientAddSkeletonDefinition.js'
import { SKELETON_DEFS } from './ClientCollections.js'

export class ClientAddToCollection {
  /**
   * @param {Client} client
   * @param {string} collectionName
   * @param {SkeletonDefinitionData} message
   * @returns {boolean}
   */
  static run (client, collectionName, message) {
    if (collectionName === SKELETON_DEFS) {
      return ClientAddSkeletonDefinition.run(client, message)
    }

    console.error('ClientAddToCollection: unhandled collection name', collectionName)
    return false
  }
}
