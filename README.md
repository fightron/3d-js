# @fightron/skeleton

Proposal for skeleton handling in the Fightron Engine.

## Proposed Usage

```javascript

// Create a new Skeleton instance with a root joint at x=0, y=0, z=0
var skeleton = new Skeleton()

// Add a new joint above the root
var joint = skeleton.joints.create(0, 1, 0)
joint.parent = skeleton.joints.root

// Alternatively:
var joint = skeleton.joints.root.append(0, 1, 0)

// Set the rotation of a joint
joint.rotation.set(0, 0.3, 0)

// Alternatively:
joint.rotation.y = 0.3

// Set a joint's Euler rotation order
joint.rotation.order = "YXZ"

// Set the quaternion rotation of a joint
joint.quaternion.set(0, 0.2, 0.3, 1)

// Alternatively:
joint.quaternion.y = 0.2
joint.quaternion.z = 0.3
joint.quaternion.w = 1

// Reposition entire skeleton
skeleton.joints.root.position.set(3, 0, 0)

// Alternatively:
skeleton.joints.root.position.x = 3

// Name a joint
joint.name = "spine1"

// Fetch a joint by name
assert(joint == skeleton.joints.get("spine1"))
```
