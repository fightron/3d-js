'use strict'

import { Pose } from '../Pose.js'

export class ClientAddPose {
  /**
   * @param {Client} client
   * @param {PoseData} data
   * @returns {boolean}
   */
  static run (client, data) {
    var skeletonDefinition = client.data.skeletonDefinitions.get(data.skeleton)

    if (!skeletonDefinition) {
      console.error('ClientAddPose: skeleton definition data not loaded in client:', data.skeleton)
      return false
    }

    var pose = new Pose({ id: data.id, skeletonDefinition, transforms: data.transforms, clear: data.clear })

    client.data.poses.set(pose.id, pose)

    return true
  }
}
