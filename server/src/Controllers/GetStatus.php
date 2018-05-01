<?php
namespace OptimusCrime\Controllers;

use OptimusCrime\Models\Entry;

class GetStatus
{
    const DISPLAY_DATE_FORMAT = 'j. M Y';

    private $settings;

    public function __construct($settings)
    {
        $this->settings = $settings;
    }

    public function get()
    {
        $settings = $this->settings['challenge'];

        $dateStart = $settings['date_start'];
        $dateEnd = $settings['date_end'];

        $entries = Entry::count();

        $daysSinceStart = static::daysBetween($dateStart) + 1;
        $daysRemaining = static::daysBetween($dateEnd, null);

        $scheduleLimit = static::calculateScheduleLimit($dateStart, $dateEnd, $daysSinceStart, $settings['target']);

        return [
            'date_start' => date(static::DISPLAY_DATE_FORMAT, strtotime($dateStart)),
            'date_end' => date(static::DISPLAY_DATE_FORMAT, strtotime($dateEnd)),
            'days_since_start' => $daysSinceStart,
            'days_remaining' => (int) $daysRemaining,
            'target' => $settings['target'],
            'entries' => $entries,
            'on_schedule' => $scheduleLimit <= $entries,
            'schedule_limit' => $scheduleLimit,
            'tick' => static::calculateTick($dateStart, $dateEnd, $settings['target'])
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
