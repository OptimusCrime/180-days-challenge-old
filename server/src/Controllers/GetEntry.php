<?php
namespace OptimusCrime\Controllers;

use OptimusCrime\Models\Entry;

class GetEntry
{
    public static function get(array $challenges)
    {
        $entries = Entry
            ::orderBy('added', 'desc')
            ->get();

        if (count($entries) === 0) {
            return [];
        }

        return static::mapEntries($challenges, $entries->toArray());
    }

    private static function mapEntries(array $challenges, array $entries)
    {
        $output = static::buildIdentifiersArray($challenges);

        foreach ($entries as $entry) {
            if (!isset($output[$entry['identifier']])) {
                continue;
            }

          $output[$entry['identifier']][] = static::mapEntry($entry);
        }

        return $output;
    }

    private static function buildIdentifiersArray(array $challenges)
    {
        $identifiers = [];
        foreach ($challenges as $challenge) {
            if (isset($challenge['identifier'])) {
                $identifiers[$challenge['identifier']] = [];
            }
        }

        return $identifiers;
    }

    private static function mapEntry(array $entry)
    {
       return [
          'id' => $entry['id'],
          'added' => $entry['added'],
          'comment' => $entry['comment']
       ];
    }
}
