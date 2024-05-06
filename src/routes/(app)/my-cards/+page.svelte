<script lang="ts">
	let { data } = $props();
  let cards = $state([]);
  cards = data.cards;
  import { buttonVariants } from "$lib/components/ui/button/index.js";
</script>

<h1 class="text-2xl">Testing My Cards</h1>

<a href="/" class={buttonVariants({ variant: "outline" })}>
  Back Home
</a>

<div class="w-11/12 mx-auto flex flex-wrap items-start justify-center gap-2">
  {#each cards as card (card.card_id)}
  	<div class="poke-card text-center">
      <img src={`https://images.pokemontcg.io/base1/${card.card_id.split('-')[1]}.png`} alt={card.card_id} />
      <span>{card.card_id}</span>
    </div>
  {/each}
</div>
