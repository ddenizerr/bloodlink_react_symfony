<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{

    #[Route('/', name:"app_home")]
    #[Route('/{/{reactRouting}', name:'app_react', requirements: ["reactRouting" => '^(?!api|admin).+'])]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }

}