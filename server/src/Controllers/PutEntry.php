<?php
namespace OptimusCrime\Controllers;

use Carbon\Carbon;

use OptimusCrime\Models\Entry;

class PutEntry
{
     public static function put($comment)
    {
        $entry = new Entry();
        $entry->comment = $comment;
        $entry->added = Carbon::now();

        return $entry->save();
    }
}
