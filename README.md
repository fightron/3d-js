# @fightron/skeleton

Skeleton structure for creating rigs in the Fightron Engine. It uses ThreeJS' `Object3D` under the hood.

## Usage

```javascript

// Create a new Skeleton instance with a root joint at x=0, y=0, z=0
var skeleton = new Skeleton()

// Add a new joint.
// Joints must have a name.
var spine = skeleton.joints.create("spine")

// Joints default to having root as parent.
// You can change the parent joint.
spine.parent = skeleton.root

// Fetch a joint by name
assert(spine == skeleton.joints.get("spine"))

// Joints are Object3D instances, so they have access to
// scale, position, rotation, and quaternion.
```
