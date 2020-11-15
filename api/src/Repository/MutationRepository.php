<?php

namespace App\Repository;

use App\Entity\Mutation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class MutationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mutation::class);
    }

    /*
     * average price of sales per year
    */
    public function averageSalesPerYear() {
        $entityManager = $this->getEntityManager();
        $query = $entityManager->createQueryBuilder()
                              ->select('(AVG(m.value/ NULLIF(m.realSurface,0))) average, YEAR(m.date) year')
                              ->from('App:mutation', 'm')
                              ->groupBy('year')
                              ->getQuery();

        return $query->execute();
    }

    /*
    -- number of sales per day, week, month, year 6s
    -- if it is done in the backend it will take a large amount of time
    -- this is why it is more convinient to just return the number of sales per day
    -- so then, filtering i.e: per day, per week, per month or per year will be more easy to handle
    */
    public function salesFilter ($startDate, $endDate) {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQueryBuilder()
                               ->select('COUNT(m.value) nb_ventes, m.date date_vente')
                               ->from('App:mutation', 'm')
                               ->where('m.date BETWEEN :start_date AND :end_date')
                               ->groupBy('date_vente')
                               ->orderBy('date_vente', 'ASC')
                               ->setParameter('start_date', $startDate)
                               ->setParameter('end_date', $endDate)
                               ->getQuery();

        return $query->execute();
    }

    /*
     * Number of sales per departement 7s
    */
    public function salesPerDepartment () {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQueryBuilder()
                               ->select('COUNT(m.value) value, m.departmentCode department_code')
                               ->from('App:mutation', 'm')
                               ->groupBy('department_code')
                               ->getQuery();

        return $query->execute();
    }

     public function salesPerDepartmentByYear ($year) {
            $entityManager = $this->getEntityManager();

            $query = $entityManager->createQueryBuilder()
                                   ->select('COUNT(m.value) value, m.departmentCode department_code')
                                   ->from('App:mutation', 'm')
                                   ->where('YEAR(m.date) = :year')
                                   ->groupBy('department_code')
                                   ->setParameter('year', $year)
                                   ->getQuery();

            return $query->execute();
        }
}
