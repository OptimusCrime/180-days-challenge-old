<?php
namespace OptimusCrime\Controllers;

use OptimusCrime\Models\Entry;

class GetStatus
{
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
        $daysSinceStart = static::daysBetween($dateStart);

        $scheduleLimit = static::calculateScheduleLimit($dateStart, $dateEnd, $daysSinceStart, $settings['target']);

        return [
            'date_start' => $dateStart,
            'date_end' => $dateEnd,
            'days_since_start' => $daysSinceStart,
            'target' => $settings['target'],
            'entries' => $entries,
            'on_schedule' => $scheduleLimit <= $entries,
            'schedule_limit' => $scheduleLimit,
        ];
    }

    private static function calculateScheduleLimit($dateStart, $dateEnd, $daysSinceStart, $target)
    {
        $duration = static::daysBetween($dateStart, $dateEnd);
        return ($target / $duration) * $daysSinceStart;
    }

    private static function daysBetween($dateStart, $dateEnd = null)
    {
        $startDateTime = new \DateTime($dateStart);
        $currentDateTime = new \DateTime($dateEnd);

        return $currentDateTime->diff($startDateTime)->format('%a');

    }
}