// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { Renderer } from '../src/Renderer.js'

class TestRenderer extends Renderer {}

describe('Renderer', function () {
  before(function () {
    this.renderer = new TestRenderer()
  })

  describe('#setParent', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setParent() }).to.throw('TestRenderer#setParent is not implemented')
    })
  })

  describe('#setPosition', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setPosition() }).to.throw('TestRenderer#setPosition is not implemented')
    })
  })

  describe('#setPositionX', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setPositionX() }).to.throw('TestRenderer#setPositionX is not implemented')
    })
  })

  describe('#setPositionY', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setPositionY() }).to.throw('TestRenderer#setPositionY is not implemented')
    })
  })

  describe('#setPositionZ', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setPositionZ() }).to.throw('TestRenderer#setPositionZ is not implemented')
    })
  })

  describe('#setRotation', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setRotation() }).to.throw('TestRenderer#setRotation is not implemented')
    })
  })

  describe('#setQuaternion', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setQuaternion() }).to.throw('TestRenderer#setQuaternion is not implemented')
    })
  })

  describe('#setScale', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setScale() }).to.throw('TestRenderer#setScale is not implemented')
    })
  })

  describe('#setScaleX', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setScaleX() }).to.throw('TestRenderer#setScaleX is not implemented')
    })
  })

  describe('#setScaleY', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setScaleY() }).to.throw('TestRenderer#setScaleY is not implemented')
    })
  })

  describe('#setScaleZ', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setScaleZ() }).to.throw('TestRenderer#setScaleZ is not implemented')
    })
  })

  describe('#setGeometryRenderable', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setGeometryRenderable() }).to.throw('TestRenderer#setGeometryRenderable is not implemented')
    })
  })

  describe('#setSkeletonRenderable', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setSkeletonRenderable() }).to.throw('TestRenderer#setSkeletonRenderable is not implemented')
    })
  })

  describe('#setJointRenderable', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setJointRenderable() }).to.throw('TestRenderer#setJointRenderable is not implemented')
    })
  })

  describe('#setMaterialRenderable', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setMaterialRenderable() }).to.throw('TestRenderer#setMaterialRenderable is not implemented')
    })
  })

  describe('#setMeshRenderable', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setMeshRenderable() }).to.throw('TestRenderer#setMeshRenderable is not implemented')
    })
  })

  describe('#setLightRenderable', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setLightRenderable() }).to.throw('TestRenderer#setLightRenderable is not implemented')
    })
  })

  describe('#setSoundRenderable', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setSoundRenderable() }).to.throw('TestRenderer#setSoundRenderable is not implemented')
    })
  })

  describe('#setCameraRenderable', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setCameraRenderable() }).to.throw('TestRenderer#setCameraRenderable is not implemented')
    })
  })

  describe('#setSceneRenderable', function () {
    it('throws an error', function () {
      expect(() => { this.renderer.setSceneRenderable() }).to.throw('TestRenderer#setSceneRenderable is not implemented')
    })
  })
})
