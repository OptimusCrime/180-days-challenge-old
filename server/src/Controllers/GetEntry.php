<?php
namespace OptimusCrime\Controllers;

use OptimusCrime\Models\Entry;

class GetEntry
{
    const ENTRY_DATE_FORMAT = 'j. M Y @ H:i:s';

    public function get()
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
          'added' => date(static::ENTRY_DATE_FORMAT, strtotime($entry['added'])),
          'comment' => $entry['comment']
       ];
    }
}
