# @fightron/skeleton

Proposal for skeleton handling in the Fightron Engine.

## Proposed Usage

```javascript

// Creates a new Skeleton instance with a root joint at x=0, y=0, z=0
var skeleton = new Skeleton()

// Add a new joint above the root
var spineJoint = skeleton.joints.create(0, 1, 0)
spineJoint.parent = skeleton.joints.root

// Alternative way:
var spineJoint = skeleton.joints.root.append(0, 1, 0)

// Rotate the spine (in radius) using Euler rotation
spineJoint.rotate(0, 0.3, 0)

// Alternatively:
spineJoint.rotateY(0.3)

// Rotate the spine using Quaternions
spineJoint.quaternion(0, 0.2, 0.3, 1)

// Alternatively:
spineJoint.quaternionY(0.2)
spineJoint.quaternionZ(0.3)
spineJoint.quaternionW(1)

// Reposition entire skeleton
// (Same approach could be used for repositioning a joint)
skeleton.joins.root.position(3, 0, 0)

// Alternatively:
skeleton.joins.root.positionX(3)
```
