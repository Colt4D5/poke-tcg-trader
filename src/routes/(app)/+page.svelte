<script lang="ts">
  const { data } = $props();
  // console.log(data.card);
</script>

<h2>{ data.card.id }</h2>
<img src={data.card.images.small} alt={`Pokemon card of ${data.card.name}`} />
