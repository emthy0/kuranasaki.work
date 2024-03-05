<!-- // Project.svelte -->
<script lang="ts">
  export let project: { title: string, description: string, link: string };
</script>

<article class="bg-white shadow-md rounded-md p-6 mt-4">
  <h2 class="text-xl font-bold">{project.title}</h2>
  <p class="mt-2">{project.description}</p>
  <a href={project.link} class="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Project</a>
</article>
