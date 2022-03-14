'use strict'

import { JOINT_TRANSFORM_EVENT, POSE_RESET_EVENT, Skeleton } from '../Skeleton.js'

export class ClientAddSkeleton {
  /**
   * @param {Client} client
   * @param {SkeletonData} data
   * @returns {boolean}
   */
  static run (client, data) {
    var definition = client.data.skeletonDefinitions.get(data.definition)

    if (!definition) {
      console.error('ClientAddSkeleton: definition data not loaded in client:', data.definition)
      return false
    }

    var skeleton = new Skeleton({
      id: data.id,
      definition: definition
    })

    client.renderer.setSkeletonRenderable(skeleton)

    skeleton.on(POSE_RESET_EVENT, client.onPoseReset, client)
    skeleton.on(JOINT_TRANSFORM_EVENT, client.onJointTransform, client)

    client.data.skeletons.set(skeleton.id, skeleton)

    return true
  }
}
