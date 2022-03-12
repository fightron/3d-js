// @ts-check

'use strict'

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

  feed (/* args */) {

  }
}
