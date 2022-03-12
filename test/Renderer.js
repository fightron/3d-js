'use strict'

import { expect, sinon } from '@dimensionalpocket/development'
import { Renderer } from '../src/Renderer.js'

class TestRenderer extends Renderer {}

describe('Renderer', function () {
  before(function () {
    this.renderer = new TestRenderer()
    sinon.stub(console, 'error')
  })

  after(function () {
    console.error.restore()
  })

  describe('#setParent', function () {
    before(function () {
      this.result = this.renderer.setParent()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setParent is not implemented')
    })
  })

  describe('#setPosition', function () {
    before(function () {
      this.result = this.renderer.setPosition()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setPosition is not implemented')
    })
  })

  describe('#setPositionX', function () {
    before(function () {
      this.result = this.renderer.setPositionX()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setPositionX is not implemented')
    })
  })

  describe('#setPositionY', function () {
    before(function () {
      this.result = this.renderer.setPositionY()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setPositionY is not implemented')
    })
  })

  describe('#setPositionZ', function () {
    before(function () {
      this.result = this.renderer.setPositionZ()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setPositionZ is not implemented')
    })
  })

  describe('#setRotation', function () {
    before(function () {
      this.result = this.renderer.setRotation()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setRotation is not implemented')
    })
  })

  describe('#setRotationOrder', function () {
    before(function () {
      this.result = this.renderer.setRotationOrder()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setRotation is not implemented')
    })
  })

  describe('#setQuaternion', function () {
    before(function () {
      this.result = this.renderer.setQuaternion()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setQuaternion is not implemented')
    })
  })

  describe('#setScale', function () {
    before(function () {
      this.result = this.renderer.setScale()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setScale is not implemented')
    })
  })

  describe('#setScaleX', function () {
    before(function () {
      this.result = this.renderer.setScaleX()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setScaleX is not implemented')
    })
  })

  describe('#setScaleY', function () {
    before(function () {
      this.result = this.renderer.setScaleY()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setScaleY is not implemented')
    })
  })

  describe('#setScaleZ', function () {
    before(function () {
      this.result = this.renderer.setScaleZ()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setScaleZ is not implemented')
    })
  })

  describe('#setGeometryRenderable', function () {
    before(function () {
      this.result = this.renderer.setGeometryRenderable()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setGeometryRenderable is not implemented')
    })
  })

  describe('#setSkeletonRenderable', function () {
    before(function () {
      this.result = this.renderer.setSkeletonRenderable()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setSkeletonRenderable is not implemented')
    })
  })

  describe('#setJointRenderable', function () {
    before(function () {
      this.result = this.renderer.setJointRenderable()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setJointRenderable is not implemented')
    })
  })

  describe('#setMaterialRenderable', function () {
    before(function () {
      this.result = this.renderer.setMaterialRenderable()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setMaterialRenderable is not implemented')
    })
  })

  describe('#setMeshRenderable', function () {
    before(function () {
      this.result = this.renderer.setMeshRenderable()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setMeshRenderable is not implemented')
    })
  })

  describe('#setLightRenderable', function () {
    before(function () {
      this.result = this.renderer.setLightRenderable()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setLightRenderable is not implemented')
    })
  })

  describe('#setSoundRenderable', function () {
    before(function () {
      this.result = this.renderer.setSoundRenderable()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setSoundRenderable is not implemented')
    })
  })

  describe('#setCameraRenderable', function () {
    before(function () {
      this.result = this.renderer.setCameraRenderable()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setCameraRenderable is not implemented')
    })
  })

  describe('#setSceneRenderable', function () {
    before(function () {
      this.result = this.renderer.setSceneRenderable()
    })

    it('logs an error', function () {
      expect(console.error).to.have.been.calledWith('TestRenderer#setSceneRenderable is not implemented')
    })
  })
})
