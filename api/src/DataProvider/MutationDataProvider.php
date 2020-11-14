<?php

namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
use ApiPlatform\Core\Exception\ResourceClassNotSupportedException;
use App\Repository\MutationRepository;

final class MutationDataProvider implements ContextAwareCollectionDataProviderInterface {
    public function getCollection(string $resourceClass, string $operationName = null, array $context = []): iterable
    {

    }
}

