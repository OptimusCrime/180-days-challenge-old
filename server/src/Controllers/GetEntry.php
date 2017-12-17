<?php
namespace OptimusCrime\Controllers;

use OptimusCrime\Models\Entry;

class GetEntry
{
    public function get()
    {
        $entries = Entry
            ::orderBy('added', 'desc')
            ->get();

        if (count($entries) === 0) {
            return [];
        }

        return $entries->toArray();
    }
}