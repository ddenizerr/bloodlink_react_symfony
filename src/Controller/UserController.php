<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;


class UserController extends  AbstractController
{

    public function __construct(readonly  private EntityManagerInterface $entityManager)
    {
    }

    /**
     * @param Request $request
     * @return void
     */
    #[Route('/api/users', name:'api_users_create', methods: ['POST'])]
    public function createUsers(Request $request) :JsonResponse
    {
        $data = json_decode($request->getContent(), true);


        
    }

    public function editUser(){

    }

    public function deleteUser(){

    }

    public function fetchUsers(){

    }

}