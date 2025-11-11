/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index';
import type { Properties } from '../types/csstype';
import type { SystemProperties } from '../types/style-props';
import type { DistributiveOmit } from '../types/system-types';
import type { Tokens } from '../tokens/index';

export interface IconProperties {
   size?: ConditionalValue<"xs" | "sm" | "md" | "lg" | "xl" | "2xl">
}

interface IconStyles extends IconProperties, DistributiveOmit<SystemStyleObject, keyof IconProperties > {}

interface IconPatternFn {
  (styles?: IconStyles): string
  raw: (styles?: IconStyles) => SystemStyleObject
}

/**
 * Pattern for Icon
 */
export declare const icon: IconPatternFn;
