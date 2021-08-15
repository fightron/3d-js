# @fightron/skeleton

Skeleton structure for creating rigs in the Fightron Engine. It uses `THREE.Bone` under the hood.

## Usage

```javascript
// Create a new Skeleton instance.
var skeleton = new Skeleton()

// Create JointDefinition instances that can be reused
// to create multiple joints of the same type.
// Custom skeletons create their own, long-lived definitions.
var rootDef = new JointDefinition({name: 'root'})
var spineDef = new JointDefinition({name: 'spine', parent: 'root'})

// Build the skeleton with the above definitions.
// This will create joint instances in skeleton.joints.
skeleton.build([rootDef, spineDef])

// Fetch a joint by name to manipulate it.
var spine = skeleton.joints.get('spine')

// Joints are THREE.Bone instances, so they have access to
// scale, position, rotation, and quaternion.
spine.rotation.y = 0.4
```
