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
        'challenges' => [
             [
                'identifier' => 'first',
                'active' => false,
                'current' => false,
                'date_start' => '2018-01-01',
                'date_end' => '2018-06-30',
                'target' => 90,
            ], [
                // Unique identifier for this challenge. Used to tie this challenge to entires in the database
                'identifier' => 'second',

                // Specifies if this challenge is still active
                'active' => true,

                // Specifies if the challenge is the current one (if multiple)
                'current' => true,

                // Dates are on the format yyyy-mm-dd
                'date_start' => '2018-07-01',
                'date_end' => '2018-12-31',

                // The target to reach within the duration of the challenge
                'target' => 90,
          ]
        ],

        'cookie_key' => '180_challenge',
        'cookie_value' => 'myrandomc2ookiepayload',

        'auth' => '$2y$10$EBVb8yJDKN6/E9M/O8nQQ.DoA3t/UIPxn6VoXlxs65xWa2zHAm/tK', // lorem
    ],
];
