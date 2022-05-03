<?php get_header() ?>
<main class="site__main">
    <section class="site__main-accueil">

        <h2>Technique d'intégration multimédia</h2>  
            
        <?php    
            wp_nav_menu(array(
                            "menu"=>"accueil",
                            "container"=>"nav",
                            "container_class"=>"accueil__menu__nav",
                            "menu_class"=>"accueil__menu__nav__ul",)); ?>

        <h2>Évenements importants</h2>
        <?php    
            wp_nav_menu(array(
                            "menu"=>"evenement",
                            "container"=>"nav",
                            "container_class"=>"accueil__menu__nav",
                            "menu_class"=>"accueil__menu__nav__ul",)); ?>
                                                     
        <?php if (have_posts()) : the_post(); endif?>
        <h1><?php the_title() ?></h1>
        <?php the_content() ?>
    </section>   
</main>
<?php get_footer() ?>