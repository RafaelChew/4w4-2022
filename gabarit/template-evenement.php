<?php /* Template name: Évenement */ ?>

<?php get_header() ?>
<main class="site__main">

    <h1>---- Template-Évenement ------</h1>

    <section class="evenement__gallerie">
          <?php get_sidebar("evenement_ligne_1"); ?>
     </section>

   <?php if (have_posts()): the_post(); ?>
   <?php the_post_thumbnail(); ?>
        <?php the_title() ?>
        <?php the_content() ?>        
   <?php endif ?>
</main>
<?php get_footer() ?>