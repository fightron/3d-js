'use strict'

import { Client } from '../Client.js'
import { ThreeRenderer } from './ThreeRenderer.js'

var renderer
var client

function main (/** @type {Document} */ document) {
  var canvas = document.getElementById('canvas')

  if (!canvas) {
    retry()
    return
  }

  renderer = new ThreeRenderer(canvas)
  client = new Client(renderer)

  console.log(client)
}

function retry () {
  setTimeout(() => {
    main(window.document)
  }, 100)
}

retry()
