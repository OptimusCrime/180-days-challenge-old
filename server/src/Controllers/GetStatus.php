<?php
namespace OptimusCrime\Controllers;

use OptimusCrime\Models\Entry;

class GetStatus
{
    public static function get(array $challenges)
    {
        $output = [];
        foreach ($challenges as $challenge) {
            $output[] = static::challengeStatus($challenge);
        }

        return $output;
    }

    private static function challengeStatus(array $challenge)
    {
        $entries = Entry
            ::where('identifier', $challenge['identifier'])
            ->count();

        return [
            'date_start' => $challenge['date_start'],
            'date_end' => $challenge['date_end'],
            'target' => $challenge['target'],
            'entries' => $entries,
            'progress' => static::calculateProgress($challenge, $entries),
        ];
    }

    private static function calculateProgress(array $challenge, $entries)
    {
        if ($challenge['active']) {
            $daysSinceStart = static::daysBetween($challenge['date_start']) + 1;

            $scheduleLimit = static::calculateScheduleLimit(
                $challenge['date_start'],
                $challenge['date_end'],
                $daysSinceStart,
                $challenge['target']
            );

            return [
                'active' => true,
                'current' => $challenge['current'],
                'on_schedule' => $scheduleLimit <= $entries,
                'schedule_limit' => $scheduleLimit,
                'tick' => static::calculateTick($challenge['date_start'], $challenge['date_end'], $challenge['target']),
                'days_since_start' => $daysSinceStart,
                'days_remaining' => static::daysBetween($challenge['date_end'], null),
            ];
        }

        return [
            'active' => false,
            'current' => $challenge['current'],
            'successful' => $entries >= $challenge['target']
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
