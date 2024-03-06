<!-- // Project.svelte -->
<script lang="ts">
  import type { IContact } from "$lib/contact"
  import { contacts } from "$lib/contact";

  // import { EProjectStatus, IProject } from '$lib/project';
  // export let contacts: IContact;
</script>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Me</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Reach me!!!</p>
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {#each contacts as contact}
          <div class="text-center text-gray-500 dark:text-gray-400 "  >
              <img class="mx-auto mb-4 w-36 h-36 cursor-pointer" on:click={()=>window.open(contact.link)} src={contact.icon} alt={contact.name}>
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href={contact.link}>{contact.name}</a>
              </h3>
              <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <p class="cursor-pointer" on:click={()=>{
                navigator.clipboard.writeText(contact.desc);
                alert("Copied to clipboard");
              }}>{contact.desc} <span class="mdi mdi-content-copy"></span></p>
          </div>
        {/each}
         
      </div>  
  </div>
</section>