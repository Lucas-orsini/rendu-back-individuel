<nav>
    <a href="?page=home">Home</a>
    <?php if (!$_SESSION) { ?>
        <a href="?page=connexion">Connexion</a>
        <a href="?page=inscription">Inscription</a>
    <?php } ?>

    <?php
    if ($_SESSION) { ?>
        <a href="?page=deconnexion">Deconnexion</a>
        <?php
        if ($_SESSION['email'] == "admin@admin.com") { ?>
            <a href="?page=admin">Admin</a>
        <?php }
        ?>
        <a href="?page=profil"><?php echo ($_SESSION['pseudo']) ?></a>
        <a href="?page=amis">Amis</a>
        <a href="?page=quiz">Quiz JS</a>
        <a href="?page=rank">Rank</a>
        <a href="?page=paris">paris</a>

    <?php }
    ?>


</nav>