'use strict'

import { SkeletonDefinition } from '../SkeletonDefinition.js'
import { SKELETON_DEFS } from './ClientCollections.js'

export class ClientAddSkeletonDefinition {
  /**
   *
   * @param {Client} client
   * @param {SkeletonDefinitionOptions} data
   * @returns
   */
  static run (client, data) {
    var collection = client.data.get(SKELETON_DEFS)

    if (!collection) {
      console.error('ClientAddSkeletonDefinition: collection missing from client')
      return false
    }

    var skeletonDef = new SkeletonDefinition(data)
    collection.set(skeletonDef.id, skeletonDef)

    return true
  }
}
