'use strict'

import { ClientPose } from './ClientPose.js'

export class ClientReceiveMessage {
  /**
   * @param {Client} client
   * @param {Array<any>} message
   * @returns {boolean}
   */
  static run (client, message) {
    var command = message[0]

    if (command === 'T') {
      return ClientPose.run(client, message[1], message[2])
    }

    if (command === '+') {
      return client.data.add(message[1], message[2])
    }

    console.error('Client#feed: unhandled command', message)
    return false
  }
}
