// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { Joint } from '../src/Joint.js'
import { JointDefinition } from '../src/JointDefinition.js'

describe('Joint', function () {
  before(function () {
    this.definition = new JointDefinition({ name: 'test', position: { y: 5 } })
  })

  describe('constructor', function () {
    it('throws an error without a definition', function () {
      expect(_ => new Joint(null)).to.throw(/definition is required/)
    })

    it('sets the definition', function () {
      var joint = new Joint(this.definition)
      expect(joint.definition).to.eq(this.definition)
    })

    it('sets the position', function () {
      var joint = new Joint(this.definition)
      expect(joint.position.y).to.eq(5)
    })
  })
})
