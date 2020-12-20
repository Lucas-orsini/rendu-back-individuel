<?php

namespace App\Controller;

use App\Model\AdminModel;

class HomeController
{

    public function __construct()
    {
        $this->model = new AdminModel();
    }

    public function render()
    {
        $sondages = $this->model->getSondages();
        $questions = $this->model->getQuestions();
        $reponses = $this->model->getReponses();

        require ROOT . "/App/view/home/home.php";
    }

    public function home()
    {
        require ROOT . "/App/view/home/home.php";
    }
    public function rank()
    {
        require ROOT . "/App/view/home/rank.php";
    }
    public function quiz()
    {
        require ROOT . "/App/view/home/quizz.php";
    }
    public function paris()
    {
        require ROOT . "/App/view/home/paris-esport.php";
    }
}
