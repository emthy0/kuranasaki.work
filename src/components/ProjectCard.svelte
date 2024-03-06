<!-- // Project.svelte -->
<script lang="ts">
  import type { IProject } from "../lib/project"

  // import { EProjectStatus, IProject } from '$lib/project';
  export let project: IProject;
</script>

<article class="bg-white shadow-md rounded-md p-6 mt-4">
  <h2 class="text-xl font-bold">{project.title}</h2>
  <p class="mt-2">{project.status}</p>
  <p class="mt-2">{project.description}</p>
  <a href={project.link} class="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Project</a>
</article>
