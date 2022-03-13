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
    var args

    if (Array.isArray(arguments[0])) {
      args = arguments[0]
    } else {
      args = arguments
    }

    var command = args[0]

    if (command === '+') {
      return ClientAddToCollection.run(this, args[1], args[2])
    }

    console.error('Client#feed: unhandled command', command)
    return false
  }
}
