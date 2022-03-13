'use strict'

import { ClientData } from './ClientData.js'
import { ClientReceiveMessage } from './operations/ClientReceiveMessage.js'

export class Client {
  /**
   * @param {Renderer} renderer
   */
  constructor (renderer) {
    if (!renderer) {
      throw new Error('Client: renderer is required')
    }

    /** @type {Renderer} */
    this.renderer = renderer

    /** @type {ClientData} */
    this.data = new ClientData(this)
  }

  /**
   * Feeds a message into the client.
   *
   * @param  {...any} args - Either a single array, or spread arguments.
   * @returns {boolean}
   */
  feed (...args) {
    var message

    if (Array.isArray(args[0])) {
      message = args[0]
    } else {
      message = args
    }

    return ClientReceiveMessage.run(this, message)
  }
}
