<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../public/css/quizz.css" rel="stylesheet">
    <link href="../public/css/styleNav.css" rel="stylesheet">
    <title>Document</title>
</head>

<body onload="popup()">
<header>
<?php require ROOT . "/App/view/navbar.php";  ?>
</header>
    <main>
      
            <div class="container">
              <div id="quiz">
                <h1>Quiz</h1>
          
                <h2 id="question"></h2>
                  
                <h3 id="score"></h3>
          
                <div class="choices">
                  <button id="guess0">        
                    <p id="choice0"></p>
                  </button>
          
                  <button id="guess1">
                    <p id="choice1"></p>
                  </button>
                    
                  <button id="guess2">
                    <p id="choice2"></p>
                  </button>
                    
                  <button id="guess3">
                    <p id="choice3"></p>
                  </button>
                </div>
          
                <p id="progress"></p>
          
              </div>
            </div>
             
    
          
          
          
    </main>
    <script src="js/quizz.js"></script>
</body>
</html>