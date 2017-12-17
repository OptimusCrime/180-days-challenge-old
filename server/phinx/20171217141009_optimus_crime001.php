<?php
use Phinx\Migration\AbstractMigration;

class OptimusCrime001 extends AbstractMigration
{
    public function change()
    {
        $this->table('entry')
            ->addColumn('added', 'datetime', ['default' => null, 'null' => false])
            ->addColumn('comment', 'text', ['null' => true, 'default' => null])
            ->create();
    }
}
