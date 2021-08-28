# @fightron/skeleton

Skeleton structure for creating rigs in the Fightron Engine. It uses `THREE.Bone` under the hood.

## Usage

First create a `SkeletonDefinition`. Those instances are long-lived and act as blueprints for creating skeleton instances:

```javascript
var skeletonDefinition = new SkeletonDefinition({
  name: 'test-skeleton',
  joints: [
    new JointDefinition({name: 'root'}),
    new JointDefinition({name: 'spine', parent: 'root'})
  ]
})
```

Once a definition is created, you can use it to create multiple `Skeleton` instances:

```javascript
var skeleton = new Skeleton(skeletonDefinition)
```

Then you can manipulate its joints:

```javascript
var spine = skeleton.joints.get('spine')
spine.rotation.y = 0.4
```
