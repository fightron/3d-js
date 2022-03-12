// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'

describe('renderers/NullRenderer', function () {
  before(function () {
    this.renderer = new NullRenderer()
  })

  function itBehavesLikeItReturnsTrue (methodName) {
    describe('#{methodName}', function () {
      it('returns true', function () {
        expect(this.renderer[methodName]()).to.eq(true)
      })
    })
  }

  itBehavesLikeItReturnsTrue('setParent')
  itBehavesLikeItReturnsTrue('setPosition')
  itBehavesLikeItReturnsTrue('setPositionX')
  itBehavesLikeItReturnsTrue('setPositionY')
  itBehavesLikeItReturnsTrue('setPositionZ')
  itBehavesLikeItReturnsTrue('setRotation')
  itBehavesLikeItReturnsTrue('setRotationOrder')
  itBehavesLikeItReturnsTrue('setQuaternion')
  itBehavesLikeItReturnsTrue('setPosition')
  itBehavesLikeItReturnsTrue('setScale')
  itBehavesLikeItReturnsTrue('setScaleX')
  itBehavesLikeItReturnsTrue('setScaleY')
  itBehavesLikeItReturnsTrue('setScaleZ')
  itBehavesLikeItReturnsTrue('setGeometryRenderable')
  itBehavesLikeItReturnsTrue('setSkeletonRenderable')
  itBehavesLikeItReturnsTrue('setJointRenderable')
  itBehavesLikeItReturnsTrue('setMaterialRenderable')
  itBehavesLikeItReturnsTrue('setMeshRenderable')
  itBehavesLikeItReturnsTrue('setLightRenderable')
  itBehavesLikeItReturnsTrue('setSoundRenderable')
  itBehavesLikeItReturnsTrue('setCameraRenderable')
  itBehavesLikeItReturnsTrue('setSceneRenderable')
})
