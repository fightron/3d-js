'use strict'

import { ClientAddToCollection } from './operations/ClientAddToCollection.js'
import { ClientCollections } from './operations/ClientCollections.js'

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

    /** @type {ClientCollectionType} */
    this.data = ClientCollections.generate()
  }

  feed (/* arguments */) {
    var command = arguments[0]

    if (command === '+') {
      return ClientAddToCollection.run(this, arguments[1], arguments[2])
    }

    console.error('Client#feed: unhandled command', command)
    return false
  }
}
