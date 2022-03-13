'use strict'

import { SkeletonDefinition } from '../SkeletonDefinition.js'
import { SKELETON_DEFS } from './ClientCollections.js'

export class ClientAddSkeletonDefinition {
  /**
   * @param {Client} client
   * @param {SkeletonDefinitionMessage} message
   * @returns {boolean}
   */
  static run (client, message) {
    var collection = client.data.get(SKELETON_DEFS)

    if (!collection) {
      console.error('ClientAddSkeletonDefinition: collection missing from client')
      return false
    }

    var skeletonDef = new SkeletonDefinition({
      id: message.id,
      joints: message.j
    })

    collection.set(skeletonDef.id, skeletonDef)

    return true
  }
}
