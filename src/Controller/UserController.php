<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;


class UserController extends  AbstractController
{

    public function __construct(readonly  private EntityManagerInterface $entityManager,readonly  private SerializerInterface $serializer)
    {
    }

    /**
     * @param Request $request
     * @return void
     */
    #[Route('/api/user/create', name:'api_users_create', methods: ['POST'])]
    public function createUsers(Request $request) :JsonResponse
    {
        $data = json_decode($request->getContent(), true);


        
    }

    public function editUser(){

    }

    public function deleteUser(){

    }

    #[Route('/api/users', name:'api_fetch_users', methods: ['GET'])]
    public function fetchUsers(): JsonResponse
    {

        $users = $this->entityManager->getRepository(User::class)->findAll();
        return $this->json(['users' => $users], 200,[], ['groups'=>'user:read']);
    }

}