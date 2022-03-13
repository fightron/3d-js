/**
 * @typedef {object} JointDefinitionMessage
 * @property {number|string} id - ID of the joint.
 * @property {?string} [par] - ID of the parent joint.
 * @property {?Vector3} [p] - Position vector
 * @property {?RotationLimits} [l] - Limits
 * @property {?string} [o] - Rotation order
 * @property {?string} [nX] - Name of the X axis
 * @property {?string} [nY] - Name of the Y axis
 * @property {?string} [nZ] - Name of the Z axis
 * @property {?JointVolumeMessage} [v] - Volume data
 */
