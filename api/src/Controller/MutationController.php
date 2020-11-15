<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Paginator;
use App\Repository\MutationRepository;

class MutationController extends AbstractController
{
    private $mutationRepository;

    public function __construct(MutationRepository $mutationRepository)
    {
        $this->mutationRepository = $mutationRepository;
    }

    /**
     * @Route("/averageSalesPerYear", methods={"GET"})
     */
    public function averageSalesPerYearAction(): Response
    {
        $data = $this->mutationRepository->averageSalesPerYear();
        $response = new Response(json_encode($data));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
         * @Route("/salesFilter", methods={"GET"})
     */
    public function salesFilterAction (Request $request)
    {
        $startDate = $request->query->get('startDate');
        $endDate = $request->query->get('endDate');

        $data = $this->mutationRepository->salesFilter($startDate, $endDate);
        $response = new Response(json_encode($data));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/salesPerDepartment", methods={"GET"})
     */
    public function salesPerDepartmentAction(Request $request): Response
    {
        $year = $request->query->get('year');
        if(empty($year)) {
            $data = $this->mutationRepository->salesPerDepartment();

            $response = new Response(json_encode($data));
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        }
        $data = $this->mutationRepository->salesPerDepartmentByYear($year);
        $response = new Response(json_encode($data));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
