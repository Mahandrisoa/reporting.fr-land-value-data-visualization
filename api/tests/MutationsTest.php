<?php

namespace App\Tests;

use App\Entity\Mutation;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;

class MutationsTest extends ApiTestCase
{
    public function testGetCollection(): void
    {
        $client = static::createClient()->request('GET', '/mutations?page=1');
        $this->assertResponseIsSuccessful();
        // Asserts that the returned content type is JSON-LD (the default)
        $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
        // Asserts that the returned JSON is validated by the JSON Schema generated for this resource by API Platform
        // This generated JSON Schema is also used in the OpenAPI spec!
        $this->assertMatchesResourceCollectionJsonSchema(Mutation::class);
    }
}
