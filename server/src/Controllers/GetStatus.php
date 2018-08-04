<?php
namespace OptimusCrime\Controllers;

use OptimusCrime\Models\Entry;

class GetStatus
{
    public static function get(array $challenges)
    {
        $output = [];
        foreach ($challenges as $index => $challenge) {
            $output[] = static::challengeStatus($challenge, $index);
        }

        return $output;
    }

    private static function challengeStatus(array $challenge, $index)
    {
        $entries = Entry
            ::where('identifier', $challenge['identifier'])
            ->count();

        return [
            'challenge' => $index,
            'identifier' => $challenge['identifier'],
            'date_start' => $challenge['date_start'],
            'date_end' => $challenge['date_end'],
            'target' => $challenge['target'],
            'entries' => $entries,
            'progress' => static::calculateProgress($challenge, $entries),
        ];
    }

    private static function calculateProgress(array $challenge, $entries)
    {
        $daysSinceStart = static::daysBetween($challenge['date_start']) + 1;

        $scheduleLimit = static::calculateScheduleLimit(
            $challenge['date_start'],
            $challenge['date_end'],
            $daysSinceStart,
            $challenge['target']
        );

        return [
            'active' => $challenge['active'],
            'current' => $challenge['current'],
            'successful' => $challenge['active'] ? null : $entries >= $challenge['target'],
            'on_schedule' => $challenge['active'] ? $scheduleLimit <= $entries : null,
            'schedule_limit' => $challenge['active'] ? $scheduleLimit : null,
            'tick' => $challenge['active'] ? static::calculateTick($challenge['date_start'], $challenge['date_end'], $challenge['target']) : null,
            'days_since_start' => $challenge['active'] ? $daysSinceStart : null,
            'days_remaining' => $challenge['active'] ? static::daysBetween($challenge['date_end'], null) : null,
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
