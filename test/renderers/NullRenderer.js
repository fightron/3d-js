'use strict'

import { expect } from '@dimensionalpocket/development'
import { Skeleton } from '../../src/Skeleton.js'
import { NullRenderer } from '../../src/renderers/NullRenderer.js'
import { SkeletonDefinition } from '../../src/SkeletonDefinition.js'

describe('renderers/NullRenderer', function () {
  var skeletonDef = new SkeletonDefinition({ id: 'test', joints: [{ id: 'j' }] })
  var skeleton = new Skeleton({ id: 'test-skel', definition: skeletonDef })
  var joint = skeleton.joints.get('j')
  var renderer = new NullRenderer()

  function itBehavesLikeItReturnsTrue (/** @type {string} */ methodName, /** @type {...any} */ ...args) {
    describe(`#${methodName}`, function () {
      it('returns true', function () {
        // @ts-ignore - metaprogramming makes TS crai
        expect(renderer[methodName](...args)).to.eq(true)
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
  itBehavesLikeItReturnsTrue('setSkeletonRenderable', skeleton)
  itBehavesLikeItReturnsTrue('setJointRenderable', joint)
  itBehavesLikeItReturnsTrue('setMaterialRenderable')
  itBehavesLikeItReturnsTrue('setMeshRenderable')
  itBehavesLikeItReturnsTrue('setLightRenderable')
  itBehavesLikeItReturnsTrue('setSoundRenderable')
  itBehavesLikeItReturnsTrue('setCameraRenderable')
  itBehavesLikeItReturnsTrue('setSceneRenderable')
})
