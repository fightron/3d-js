'use strict'

import { ClientAddToCollection } from './ClientAddToCollection.js'

export class ClientReceiveMessage {
  /**
   * @param {Client} client
   * @param {Array<any>} message
   * @returns {boolean}
   */
  static run (client, message) {
    var command = message[0]

    if (command === '+') {
      return ClientAddToCollection.run(client, message[1], message[2])
    }

    console.error('Client#feed: unhandled command', message)
    return false
  }
}
