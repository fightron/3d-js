// // @ts-check

// 'use strict'

// // @ts-ignore -- "cannot find module" error
// import { Joint as IKJoint, Link as IKLink, Goal as IKGoal, Solver as IKSolver } from 'closed-chain-ik'

// export class IKChain {
//   /**
//    *
//    * @param {Array<Joint>} joints - array of joints that should be rotated to reach the goal.
//    */
//   constructor (joints) {
//     if (joints.length <= 1) {
//       throw new Error('IKChain: must provide more than one joint')
//     }

//     this.joints = joints
//     this.map = new WeakMap() // Joint => IKJoint
//     this.goal = null
//     this.solver = null
//     this.build()
//   }

//   build () {
//     var ikLink, ikJoint, firstLink, jointPosition

//     // For each joint, create an ikLink -> ikJoint pair and link them.
//     for (var joint of this.joints) {
//       ikLink = new IKLink()

//       // First link is used to create the Solver.
//       if (!firstLink) firstLink = ikLink

//       // Link previous joint to next link
//       if (ikJoint) {
//         ikJoint.addChild(ikLink)
//       }

//       ikJoint = new IKJoint()
//       ikLink.addChild(ikJoint)

//       jointPosition = joint.position
//       ikJoint.setPosition(jointPosition.x, jointPosition.y, jointPosition.z)

//       // TODO: set ikJoint degree of freedom (DOF)

//       this.map.set(joint, ikJoint)
//     }

//     // Last link that will target the goal
//     ikLink = new IKLink()
//     ikJoint.addChild(ikLink)

//     // Create the goal
//     var goal = new IKGoal();
//     ikLink.getWorldPosition( goal.position );
//     ikLink.getWorldQuaternion( goal.quaternion );
//     goal.makeClosure( ikLink )

//     this.goal = goal
//     this.solver = new IKSolver( firstLink )
//   }

//   /**
//    * Solve and update Joints with computed rotations from IKJoints.
//    * Should be called after updating goal position.
//    */
//   update () {
//     this.solver.solve()

//     var ikJoint, ikJointQuaternion
//     for (var joint of this.joints) {
//       ikJoint = this.map.get(joint)

//       if (!ikJoint) {
//         console.warn(`IKChain#update: cannot find IKJoint for Joint#${joint.name}`)
//         continue
//       }

//       ikJointQuaternion = ikJoint.quaternion
//       joint.quaternion.set(
//         ikJointQuaternion[0],
//         ikJointQuaternion[1],
//         ikJointQuaternion[2],
//         ikJointQuaternion[3],
//       )
//     }
//   }
// }

// /**
//  * @typedef { import("./Joint").Joint } Joint
//  */
