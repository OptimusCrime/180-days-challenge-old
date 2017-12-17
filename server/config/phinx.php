<?php
require __DIR__ . '/../vendor/autoload.php';

use OptimusCrime\Helpers\SettingsParser;

$settingsParser = new SettingsParser();
$settingsParser->parse([
    __DIR__ . '/../config/default-settings.php',
    __DIR__ . '/../config/settings.php'
]);

return [
    'paths' => [
        'migrations' => '%%PHINX_CONFIG_DIR%%/../phinx'
    ],
    'environments' => [
        'default_migration_table' => 'phinxlog',
        'default_database' => 'production',
        'production' => [
            'adapter' => 'sqlite',
            'name' => '/var/www/sqlite/db.sqlite3',
        ]
    ]
];