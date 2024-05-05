<script lang="ts">
  import Header from '$components/Header.svelte';
  
  const { data, children } = $props()
</script>

<Header user={ data.user }></Header>

{@render children()}
