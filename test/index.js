// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'

import Skeleton from '../index.js'
import { Skeleton as SkeletonFromSrc } from '../src/Skeleton.js'

describe('main require', function () {
  it('exports Skeleton from src', function () {
    expect(Skeleton).to.equal(SkeletonFromSrc)
  })
})
