<!-- // App.svelte -->
<script lang="ts">
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Project from './components/ProjectCard.svelte';

  let projects: { title: string, description: string, link: string }[] = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://project1.com'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://project2.com'
    },
  ];
</script>

<main class="h-screen w-screen px-0 py-0">
  <Header />
<!-- 
    <section class="container mx-auto">
      {#each projects as project}
        <Project {project} />
      {/each}
    </section> -->
  <Footer />
</main>

<style>
</style>
