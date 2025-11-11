import { scroll } from 'motion';
import { clamp, lerp } from '../../shared/animation-utils.js';

/**
 * Parallax variant implementation using Motion.js scroll()
 */

export interface ParallaxConfig {
  enterIntensity: number;
  exitIntensity: number;
  direction: 'up' | 'down';
  transitionPoint: number;
  innerParallax?: {
    intensity?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    scale?: number;
  };
  trigger: string;
  onStart?: () => void;
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
}

export interface ParallaxControls {
  destroy: () => void;
}

/**
 * Create parallax scroll animation using Motion.js
 */
export function createParallaxAnimation(
  element: Element,
  config: ParallaxConfig
): ParallaxControls {
  const {
    enterIntensity,
    exitIntensity,
    direction,
    transitionPoint,
    innerParallax,
    trigger,
    onStart,
    onComplete,
    onProgress
  } = config;

  let hasStarted = false;
  let hasCompleted = false;

  // Create scroll-linked animation with Motion.js
  let totalMovement = 0;
  let lastProgress = 0;

  const controls = scroll(
    (progress: number) => {
      // Call progress callback
      onProgress?.(progress);

      // Calculate the change in progress since last frame
      const deltaProgress = progress - lastProgress;
      lastProgress = progress;

      // Smooth transition between enter and exit intensities
      // transitionPoint is now configurable via props

      let currentIntensity: number;
      if (progress <= transitionPoint) {
        // First half: use enterIntensity (entering viewport)
        currentIntensity = enterIntensity;
      } else {
        // Second half: smoothly transition from enterIntensity to exitIntensity
        const exitProgress = (progress - transitionPoint) / (1 - transitionPoint);
        currentIntensity = lerp(enterIntensity, exitIntensity, exitProgress);
      }

      // Accumulate movement based on intensity - this ensures consistent direction
      // Higher intensity = more movement per scroll unit = faster effect
      totalMovement += deltaProgress * currentIntensity;

      // Calculate transform values based on direction
      const transform = calculateParallaxTransform(direction, totalMovement);

      // Apply transform to element
      if (element instanceof HTMLElement) {
        element.style.transform = transform;
      }

      // Handle inner parallax for child elements
      if (innerParallax && element instanceof HTMLElement) {
        const innerElements = element.querySelectorAll('img, video, [data-parallax-inner]');
        innerElements.forEach((innerEl) => {
          if (innerEl instanceof HTMLElement) {
            // Ensure element has proper sizing on first frame
            if (!innerEl.dataset.parallaxInitialized) {
              applyInnerParallaxStyles(innerEl, innerParallax);
              innerEl.dataset.parallaxInitialized = 'true';
            }

            const innerTransform = calculateInnerParallaxTransform(
              innerParallax,
              progress
            );
            innerEl.style.transform = innerTransform;
          }
        });
      }

      // Handle start callback
      if (!hasStarted && progress > 0) {
        hasStarted = true;
        onStart?.();
      }

      // Handle complete callback
      if (!hasCompleted && progress >= 1) {
        hasCompleted = true;
        onComplete?.();
      }
    },
    {
      target: element,
      offset: ['start end', 'end start']
    }
  );

  return {
    destroy: () => {
      controls();
    }
  };
}

/**
 * Calculate transform string based on direction and movement
 */
function calculateParallaxTransform(
  direction: 'up' | 'down',
  movement: number
): string {
  // Base movement range (in pixels) - increased for more dramatic effect
  const baseRange = 200;
  const pixelMovement = movement * baseRange;

  switch (direction) {
    case 'up':
      return `translateY(${-pixelMovement}px)`; // Negative for upward movement
    case 'down':
      return `translateY(${pixelMovement}px)`; // Positive for downward movement
    default:
      return `translateY(${-pixelMovement}px)`;
  }
}

/**
 * Apply initial styles to inner parallax elements to prevent edge reveal
 */
function applyInnerParallaxStyles(
  element: HTMLElement,
  innerParallax: {
    intensity?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    scale?: number;
  }
): void {
  const { intensity = 0.5, scale = 1.0 } = innerParallax;

  // Calculate buffer needed based on intensity
  // Higher intensity = more movement = need more buffer
  const bufferScale = 1 + (intensity * 0.2); // e.g., 0.6 intensity = 1.12x scale
  const finalScale = Math.max(bufferScale, scale);

  // Apply initial scale to cover parallax movement
  element.style.width = `${finalScale * 100}%`;
  element.style.height = `${finalScale * 100}%`;
  element.style.objectFit = 'cover';
  element.style.position = 'absolute';
  element.style.top = '50%';
  element.style.left = '50%';
  element.style.transform = 'translate(-50%, -50%)';
}

/**
 * Calculate inner parallax transform for child elements
 */
function calculateInnerParallaxTransform(
  innerParallax: {
    intensity?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    scale?: number;
  },
  progress: number
): string {
  const {
    intensity = 0.5,
    direction = 'up',
    scale = 1.0
  } = innerParallax;

  // Calculate movement for inner content
  const baseRange = 100;
  const movement = (progress - 0.5) * intensity * baseRange;

  // Calculate scale if specified - now always includes buffer
  const bufferScale = 1 + (intensity * 0.2);
  const finalScale = Math.max(bufferScale, scale); // TODO: Remove?
  const scaleValue = scale !== 1.0
    ? lerp(bufferScale, Math.max(bufferScale, scale), progress)
    : bufferScale;

  // Build transform string starting from centered position
  const transforms: string[] = ['translate(-50%, -50%)'];

  // Add translation based on direction
  switch (direction) {
    case 'up':
      transforms.push(`translateY(${-movement}px)`);
      break;
    case 'down':
      transforms.push(`translateY(${movement}px)`);
      break;
    case 'left':
      transforms.push(`translateX(${-movement}px)`);
      break;
    case 'right':
      transforms.push(`translateX(${movement}px)`);
      break;
  }

  // Add scale if different from buffer scale
  if (scaleValue !== bufferScale) {
    transforms.push(`scale(${scaleValue / bufferScale})`);
  }

  return transforms.join(' ');
}

/**
 * Parse trigger string into Motion.js offset format
 * TODO: Remove?
 */
function parseTriggerOffset(trigger: string): [string, string] {
  const parts = trigger.split(' ');
  return [parts[0] || 'start', parts[1] || 'end'];
}
