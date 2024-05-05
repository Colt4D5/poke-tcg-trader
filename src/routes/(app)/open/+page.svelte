<script lang="ts">
  import { buttonVariants, Button } from "$lib/components/ui/button/index.js";
  let cards = $state([]);
	
  async function getCards() {
    // console.log("getting cards...");
    const res = await fetch('/api/open-pack', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    // console.log(data);
    cards = data.cards;
  }
</script>

<h1>Open Testing</h1>

<a href="/" class={buttonVariants({ variant: "outline" })}>
  Home
</a>

<Button onclick={getCards}>Get Cards</Button>

<div id="card-grid" class="py-12 flex flex-wrap justify-start items-start gap-4 w-11/12 mx-auto">
  {#each cards as card (card.id)}
    <div class="poke-card flex flex-col items-center">
      <img src={card.images.small} alt={`Pokemon card for ${card.name}`} />
      <span>{card.name}</span>
    </div>
  {/each}
</div>
