# @fightron/skeleton

Proposal for skeleton handling in the Fightron Engine.

## Proposed Usage

```javascript

// Create a new Skeleton instance with a root joint at x=0, y=0, z=0
var skeleton = new Skeleton()

// Add a new joint.
// Joints must have a name.
var spine = skeleton.joints.create("spine")

// Change the joint position, relative to the parent.
spine.position.y = 1

// Joints default to having root as parent.
// You can specify the parent joint name.
spine.parent = "root"

// Set the rotation of a joint
spine.rotation.set(0, 0.3, 0)

// Alternatively:
spine.rotation.y = 0.3

// Set a joint's Euler rotation order
spine.rotation.order = "YXZ"

// Set the quaternion rotation of a joint
spine.quaternion.set(0, 0.2, 0.3, 1)

// Alternatively:
spine.quaternion.y = 0.2
spine.quaternion.z = 0.3
spine.quaternion.w = 1

// Reposition entire skeleton
skeleton.root.position.set(3, 0, 0)

// Alternatively:
skeleton.root.position.x = 3

// Fetch a joint by name
assert(spine == skeleton.joints.get("spine"))
```
