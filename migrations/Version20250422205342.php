<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250422205342 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE blood_donation ADD user_id INT DEFAULT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE blood_donation ADD CONSTRAINT FK_908BB405A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE SET NULL
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_908BB405A76ED395 ON blood_donation (user_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE blood_donation DROP FOREIGN KEY FK_908BB405A76ED395
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_908BB405A76ED395 ON blood_donation
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE blood_donation DROP user_id
        SQL);
    }
}
