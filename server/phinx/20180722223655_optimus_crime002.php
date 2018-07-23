<?php
use Phinx\Migration\AbstractMigration;

class OptimusCrime002 extends AbstractMigration
{
    public function change()
    {
        $this->table('entry')
            ->addColumn('identifier', 'string', ['default' => '', 'null' => false, 'limit' => 80])
            ->save();
    }
}
