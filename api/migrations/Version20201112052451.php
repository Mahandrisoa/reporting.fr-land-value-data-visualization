<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201112052451 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE mutation ALTER type DROP NOT NULL');
        $this->addSql('ALTER TABLE mutation ALTER value DROP NOT NULL');
        $this->addSql('ALTER TABLE mutation ALTER real_surface DROP NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE mutation ALTER type SET NOT NULL');
        $this->addSql('ALTER TABLE mutation ALTER value SET NOT NULL');
        $this->addSql('ALTER TABLE mutation ALTER real_surface SET NOT NULL');
    }
}
