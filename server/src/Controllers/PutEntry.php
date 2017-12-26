<?php
namespace OptimusCrime\Controllers;

use Carbon\Carbon;

use OptimusCrime\Models\Entry;

class PutEntry
{
    private $comment;

    public function __construct($comment = null)
    {
        $this->comment = $comment;
    }

    public function run()
    {
        $entry = new Entry();
        $entry->comment = $this->comment;
        $entry->added = Carbon::now();

        return $entry->save();
    }
}
