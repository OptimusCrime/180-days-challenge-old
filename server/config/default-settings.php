<?php
return [
    'settings' => [
        'displayErrorDetails' => true,
        'addContentLengthHeader' => false,

        'base_dir' => dirname(__DIR__),

        'db' => [
            'driver' => 'sqlite',
            'database' => '/var/www/sqlite/db.sqlite3'
        ],

        // Challenge specific settings
        'challenge' => [
            // Dates are on the format yyyy-mm-dd
            'date_start' => '2017-01-01',
            'date_end' => '2017-12-31',

            // The target to reach within the duration of the challenge
            'target' => 80
        ],

        'auth' => '$2y$10$EBVb8yJDKN6/E9M/O8nQQ.DoA3t/UIPxn6VoXlxs65xWa2zHAm/tK', // lorem
    ],
];
