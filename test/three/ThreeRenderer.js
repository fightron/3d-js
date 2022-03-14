'use strict'

import { expect } from '@dimensionalpocket/development'

import * as THREE from 'three'

import { Skeleton } from '../../src/Skeleton.js'
import { SkeletonDefinition } from '../../src/SkeletonDefinition.js'
import { ThreeRenderer } from '../../src/three/ThreeRenderer.js'
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<html><body><div id="container"><canvas id="canvasElement" width="200" height="200"></canvas></div></body></html>')

const canvas = dom.window._document.getElementById('canvasElement')

describe('ThreeRenderer', function () {
  before(function () {
    this.renderer = new ThreeRenderer(canvas)
  })

  describe('constructor', function () {
    it('raises an error if a canvas is not provided', function () {
      // @ts-ignore
      expect(() => { return new ThreeRenderer(null) }).to.throw(/canvas element is required/)
    })
  })

  describe('#setSkeletonRenderable', function () {
    before(function () {
      var definition = new SkeletonDefinition({
        id: 'test',
        joints: [
          { id: 'root' },
          { id: 'spine1', parent: 'root', position: { y: 2 } },
          { id: 'spine2', parent: 'spine1', position: { y: 3 } },
          { id: 'leg1', parent: 'root', position: { x: -2, y: -2 } },
          { id: 'leg2', parent: 'root', position: { x: 2, y: -2 } }
        ]
      })
      this.skeleton = new Skeleton({ id: 'test-skeleton', definition })
      this.renderer.setSkeletonRenderable(this.skeleton)
    })

    it('sets the skeleton renderable to a THREE.Skeleton', function () {
      expect(this.skeleton.renderable).to.be.an.instanceOf(THREE.Skeleton)
    })

    it('sets the bone hierarchy', function () {
      var bones = this.skeleton.renderable.bones
      expect(bones[1].parent).to.eq(bones[0])
    })

    it('sets bone positions', function () {
      var bones = this.skeleton.renderable.bones
      expect(bones[1].position.x).to.eq(0)
      expect(bones[1].position.y).to.eq(2)
      expect(bones[1].position.z).to.eq(0)
      expect(bones[2].position.x).to.eq(0)
      expect(bones[2].position.y).to.eq(3)
      expect(bones[2].position.z).to.eq(0)
      expect(bones[3].position.x).to.eq(-2)
      expect(bones[3].position.y).to.eq(-2)
      expect(bones[3].position.z).to.eq(0)
      expect(bones[4].position.x).to.eq(2)
      expect(bones[4].position.y).to.eq(-2)
      expect(bones[4].position.z).to.eq(0)
    })
  })
})
