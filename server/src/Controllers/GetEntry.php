<?php
namespace OptimusCrime\Controllers;

use OptimusCrime\Models\Entry;

class GetEntry
{
    public static function get()
    {
        $entries = Entry
            ::orderBy('added', 'desc')
            ->get();

        if (count($entries) === 0) {
            return [];
        }

        return static::mapEntries($entries->toArray());
    }

    private static function mapEntries(array $entries)
    {
        $output = [];
        foreach ($entries as $entry) {
          $output[] = static::mapEntry($entry);
        }

        return $output;
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
