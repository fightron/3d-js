# @fightron/3d

[![build](https://github.com/fightron/3d-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/fightron/3d-js/actions/workflows/node.js.yml) [![Total alerts](https://img.shields.io/lgtm/alerts/g/fightron/3d-js.svg)](https://lgtm.com/projects/g/fightron/3d-js/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fightron/3d-js.svg)](https://lgtm.com/projects/g/fightron/3d-js/context:javascript)

3D classes and utilities for the Fightron Engine.

* `Geometry` - defines the structure of a 3d object.
* `Vertex` - a single vertex in a geometry.
* `Face3` - a single triangular face in a geometry.
* `Material` - a single material instance, used to add color/textures/etc to a geometry in a mesh.
* `Mesh` - combines a geometry and material to render an object on screen.
* `Light`
* `Sound`
* `Camera`
* [`Skeleton`](#skeleton) - a skeleton instance.
* `SkeletonDefinition` - the blueprint of skeleton instances.
* `Joint` - a single joint in a skeleton instance.
* `JointDefinition` - the blueprint of a single joint. Used to create skeleton definitions.
* `Joints` - a collection of joints.
* `Volume` - holds data to render a box. Used mostly for preview purposes.
* `Pose`
* `Animation`
* `Scene` - an instance that holds instances of meshes, lights, sounds, cameras, skeletons, poses, and animations.
* `Client` - presents a scene and provides a messaging interface to allow its contents to be changed by external sources.
* `Renderer` - an interface that connects a client to an external 3D renderer.

---

# Skeleton

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

To manipulate its joints, you need to use an external renderer.

# Renderer

The Renderer class in this library provides an interface for subclasses to follow.

List of renderers:

* [3d-three](https://github.com/fightron/3d-three) - THREE.js renderer
