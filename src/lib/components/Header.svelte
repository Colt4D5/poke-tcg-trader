<script lang="ts">
	const { user } = $props();
	import * as Avatar from "$lib/components/ui/avatar/index.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
</script>

<header class="p-4 flex items-center justify-between">
	{#if user}
  	{@render badge(user)}
  {:else}
    <h1>This is the header, yo</h1>
  {/if}
</header>

{#snippet badge({ username })}
	<div id="badge" class="flex items-center gap-4">
    <Avatar.Root>
      <Avatar.Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74aec840-98e2-4a1e-b66a-e71e3eb0545e/dfbcoj1-4374cfa0-7a6a-4779-82c8-54751ea95e01.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0YWVjODQwLTk4ZTItNGExZS1iNjZhLWU3MWUzZWIwNTQ1ZVwvZGZiY29qMS00Mzc0Y2ZhMC03YTZhLTQ3NzktODJjOC01NDc1MWVhOTVlMDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FXlznGpOBozISLPb9lrMdzCl7Fnm3eLsXQi9b5AzoUI" alt="@shadcn" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
    <span class="text-xl">{username}</span> 
  </div>
  
  <a href="/my-cards" class={buttonVariants({ variant: "outline" })}>
    My Cards
  </a>
{/snippet}
