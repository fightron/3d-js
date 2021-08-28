# @fightron/skeleton

[![build](https://github.com/fightron/skeleton-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/fightron/skeleton-js/actions/workflows/node.js.yml) [![Total alerts](https://img.shields.io/lgtm/alerts/g/fightron/skeleton-js.svg)](https://lgtm.com/projects/g/fightron/skeleton-js/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fightron/skeleton-js.svg)](https://lgtm.com/projects/g/fightron/skeleton-js/context:javascript)

Skeleton structure for creating rigs in the Fightron Engine.

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

To manipulate its joints, you need to use a package with rendering features:

* [skeleton-three](https://github.com/fightron/skeleton-three) - Uses THREE skeleton and bone systems.
