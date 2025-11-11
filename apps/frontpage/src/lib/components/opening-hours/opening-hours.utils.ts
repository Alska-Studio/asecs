import type {
  DaySchedule,
  OpeningStatus,
  SpecialHoursOverride,
  DefaultOpeningHours
} from './opening-hours.types';

/**
 * Swedish day names for formatting
 */
const SWEDISH_DAYS = [
  'söndag',
  'måndag',
  'tisdag',
  'onsdag',
  'torsdag',
  'fredag',
  'lördag'
];

/**
 * Parse time string (HH:mm) and combine with date
 */
function parseTime(timeStr: string, date: Date): Date {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
}

/**
 * Format time as HH:mm
 */
function formatTime(date: Date): string {
  return date.toLocaleTimeString('sv-SE', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

/**
 * Format date as YYYY-MM-DD
 */
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Check if there's a special hours override for a given date
 * TODO: This will query the collection for overrides
 */
function getSpecialHoursForDate(
  date: Date,
  overrides?: SpecialHoursOverride[]
): SpecialHoursOverride | null {
  if (!overrides || overrides.length === 0) return null;

  const dateStr = formatDate(date);
  return overrides.find(override => override.date === dateStr) || null;
}

/**
 * Get the effective schedule for a given date
 * Considers both default schedule and special overrides
 */
function getEffectiveSchedule(
  date: Date,
  weeklySchedule: DaySchedule[],
  overrides?: SpecialHoursOverride[]
): { schedule: DaySchedule | null; specialReason?: string } {
  // Check for special hours override first
  const specialHours = getSpecialHoursForDate(date, overrides);

  if (specialHours) {
    if (specialHours.hours === null) {
      // Closed due to special day
      return { schedule: null, specialReason: specialHours.reason };
    }

    // Use special hours
    return {
      schedule: {
        day: date.getDay(),
        ...specialHours.hours
      },
      specialReason: specialHours.reason
    };
  }

  // Use regular weekly schedule
  const daySchedule = weeklySchedule.find(s => s.day === date.getDay());
  return { schedule: daySchedule || null };
}

/**
 * Find the next opening time
 */
function findNextOpening(
  schedule: DaySchedule[],
  currentTime: Date,
  overrides?: SpecialHoursOverride[]
): { day: number; time: string; daysUntil: number } | null {
  const currentDay = currentTime.getDay();
  const currentTimeStr = formatTime(currentTime);

  // Check next 14 days (2 weeks) to account for holidays
  for (let i = 0; i < 14; i++) {
    const checkDate = new Date(currentTime);
    checkDate.setDate(checkDate.getDate() + i);
    const checkDay = checkDate.getDay();

    const { schedule: daySchedule } = getEffectiveSchedule(checkDate, schedule, overrides);

    if (daySchedule) {
      // If it's today, only consider if opening time is in the future
      if (i === 0 && daySchedule.open <= currentTimeStr) {
        continue;
      }
      return { day: checkDay, time: daySchedule.open, daysUntil: i };
    }
  }

  return null;
}

/**
 * Calculate opening status based on schedule and current time
 */
export function calculateOpeningStatus(
  schedule: DaySchedule[],
  currentTime: Date = new Date(),
  overrides?: SpecialHoursOverride[]
): OpeningStatus {
  const { schedule: todaySchedule, specialReason } = getEffectiveSchedule(
    currentTime,
    schedule,
    overrides
  );

  if (!todaySchedule) {
    // Closed today (either no hours or special closure)
    const nextOpening = findNextOpening(schedule, currentTime, overrides);

    if (!nextOpening) {
      return {
        currentStatus: {
          isOpen: false,
          message: 'Stängt nu'
        },
        specialReason
      };
    }

    const nextMessage = nextOpening.daysUntil === 0
      ? `Öppnar idag ${nextOpening.time}`
      : nextOpening.daysUntil === 1
      ? `Öppnar imorgon ${nextOpening.time}`
      : `Öppnar ${SWEDISH_DAYS[nextOpening.day]} ${nextOpening.time}`;

    return {
      currentStatus: {
        isOpen: false,
        message: specialReason || 'Stängt nu'
      },
      nextStatus: {
        message: nextMessage
      },
      specialReason
    };
  }

  // Check if currently within opening hours
  const openTime = parseTime(todaySchedule.open, currentTime);
  const closeTime = parseTime(todaySchedule.close, currentTime);
  const isOpen = currentTime >= openTime && currentTime < closeTime;

  if (isOpen) {
    return {
      currentStatus: {
        isOpen: true,
        message: `Öppet till ${todaySchedule.close}`
      },
      specialReason
    };
  } else if (currentTime < openTime) {
    // Before opening today
    return {
      currentStatus: {
        isOpen: false,
        message: 'Stängt nu'
      },
      nextStatus: {
        message: `Öppnar idag ${todaySchedule.open}`
      },
      specialReason
    };
  } else {
    // After closing today, find next opening
    const nextOpening = findNextOpening(schedule, currentTime, overrides);

    if (!nextOpening) {
      return {
        currentStatus: {
          isOpen: false,
          message: 'Stängt nu'
        },
        specialReason
      };
    }

    const nextMessage = nextOpening.daysUntil === 1
      ? `Öppnar imorgon ${nextOpening.time}`
      : `Öppnar ${SWEDISH_DAYS[nextOpening.day]} ${nextOpening.time}`;

    return {
      currentStatus: {
        isOpen: false,
        message: 'Stängt nu'
      },
      nextStatus: {
        message: nextMessage
      },
      specialReason
    };
  }
}

/**
 * TODO: Fetch default opening hours from Payload CMS collection
 * This will be implemented when the OpeningHours collection is created
 *
 * @param locationId - The store/location identifier
 * @returns Default opening hours configuration
 */
export async function fetchDefaultOpeningHours(
  locationId: string
): Promise<DefaultOpeningHours | null> {
  // TODO: Implement API call to fetch from collection
  // Example structure:
  // const response = await fetch(`/api/opening-hours/${locationId}`);
  // return await response.json();

  console.warn('⚠️ fetchDefaultOpeningHours not yet implemented - using mock data');
  return getMockOpeningHours();
}

/**
 * Mock opening hours data for development
 * TODO: Remove this when real collection is implemented
 */
export function getMockOpeningHours(): DefaultOpeningHours {
  return {
    locationId: 'asecs-main',
    weeklySchedule: [
      { day: 1, open: '10:00', close: '20:00' }, // Monday
      { day: 2, open: '10:00', close: '20:00' }, // Tuesday
      { day: 3, open: '10:00', close: '20:00' }, // Wednesday
      { day: 4, open: '10:00', close: '20:00' }, // Thursday
      { day: 5, open: '10:00', close: '21:00' }, // Friday (extended)
      { day: 6, open: '10:00', close: '18:00' }, // Saturday
      { day: 0, open: '11:00', close: '17:00' } // Sunday
    ],
    overrides: [
      // Example: Christmas Eve (closed)
      // { date: '2024-12-24', hours: null, reason: 'Julafton' },
      // Example: New Year's Day (special hours)
      // { date: '2025-01-01', hours: { open: '12:00', close: '16:00' }, reason: 'Nyårsdagen' }
    ]
  };
}
