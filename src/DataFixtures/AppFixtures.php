<?php

namespace App\DataFixtures;

use App\Entity\BloodDonation;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Exception;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactory;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactoryInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class AppFixtures extends Fixture
{

    public function __construct(private readonly UserPasswordHasherInterface $userPasswordHasher)
    {
    }

    /**
     * @throws Exception
     */
    public function load(ObjectManager $manager): void
    {
        $users = [];
        $requests = [];

        for ($i = 0; $i < 5; $i++) {
            $user = new User();
            $user->setEmail('test@bloodlink.com');
            $user->setPassword($this->userPasswordHasher->hashPassword($user, 'test123'));
            $user->setRoles(['ROLE_USER']);
            $user->setCreatedAt(new \DateTimeImmutable());
            $user->setName('Test');
            $user->setSurname('User');

            $manager->persist($user);
            $users[] = $user;
        }



        $bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        $locations = ['Cork', 'Dublin', 'Larnaca', 'Amsterdam'];

        for ($i = 0; $i < 10; $i++) {
            $request = new BloodDonation();
            $request->setDonorName('Donor' . ($i + 1));
            $request->setConsented(true);
            $request->setLocation($locations[array_rand($locations)]);
            $request->setDateOfDonation(new \DateTimeImmutable('now - ' . rand(1, 30) . ' days'));
            $request->setBloodType($bloodTypes[array_rand($bloodTypes)]);
            $request->setCreatedAt(new \DateTimeImmutable());

            if (rand(0, 1)) {
                $request->setUser($users[array_rand($users)]);
            }
            $manager->persist($request);
        }

        $manager->flush();
    }
}
