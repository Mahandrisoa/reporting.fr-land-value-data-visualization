<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class MutationControllerTest extends WebTestCase
{
    public function testAverageSalesPerYear()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/averageSalesPerYear');

        $response = $client->getResponse();
        $comment = json_decode($response->getContent(), true);

        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(200);
        $this->assertResponseHasHeader('content-type', 'application/json; charset=utf-8');
    }

    public function testSalesFilter()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/salesFilter');

        $response = $client->getResponse();
        $comment = json_decode($response->getContent(), true);

        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(200);
        $this->assertResponseHasHeader('content-type', 'application/json; charset=utf-8');
    }

    public function testSalesPerDepartment()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/salesPerDepartment');

        $response = $client->getResponse();
        $comment = json_decode($response->getContent(), true);

        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(200);
        $this->assertResponseHasHeader('content-type', 'application/json; charset=utf-8');
    }
}
