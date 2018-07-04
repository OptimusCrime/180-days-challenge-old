<?php
namespace OptimusCrime\Controllers;

use OptimusCrime\Models\Entry;

class GetStatus
{
    public static function get($dateStart, $dateEnd, $target)
    {
        $entries = Entry::count();

        $daysSinceStart = static::daysBetween($dateStart) + 1;
        $daysRemaining = static::daysBetween($dateEnd, null);

        $scheduleLimit = static::calculateScheduleLimit($dateStart, $dateEnd, $daysSinceStart, $target);

        return [
            'date_start' => $dateStart,
            'date_end' => $dateEnd,
            'days_since_start' => $daysSinceStart,
            'days_remaining' => (int) $daysRemaining,
            'target' => $target,
            'entries' => $entries,
            'on_schedule' => $scheduleLimit <= $entries,
            'schedule_limit' => $scheduleLimit,
            'tick' => static::calculateTick($dateStart, $dateEnd, $target)
        ];
    }

    private static function calculateTick($dateStart, $dateEnd, $target)
    {
      return ($target / static::daysBetween($dateStart, $dateEnd));
    }

    private static function calculateScheduleLimit($dateStart, $dateEnd, $daysSinceStart, $target)
    {
        return static::calculateTick($dateStart, $dateEnd, $target) * $daysSinceStart;
    }

    private static function daysBetween($dateStart, $dateEnd = null)
    {
        $startDateTime = new \DateTime($dateStart);
        $currentDateTime = new \DateTime($dateEnd);

        return (int) $currentDateTime->diff($startDateTime)->format('%a');

    }
}
