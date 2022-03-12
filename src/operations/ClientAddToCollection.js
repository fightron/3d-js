'use strict'

import { ClientAddSkeletonDefinition } from './ClientAddSkeletonDefinition.js'

export class ClientAddToCollection {
  /**
   * @param {Client} client
   * @param {string} collectionName
   * @param {object} data
   */
  static run (client, collectionName, data) {
    if (collectionName === 'sktD') {
      return ClientAddSkeletonDefinition.run(client, data)
    }

    console.error('ClientAddToCollection: unhandled collection name', collectionName)
    return false
  }
}
