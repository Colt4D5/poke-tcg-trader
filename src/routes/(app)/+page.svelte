<script lang="ts">
  const { data } = $props();
  const usersName = `${data.user.first_name} ${data.user.last_name}`;
  import { buttonVariants } from "$lib/components/ui/button/index.js";
</script>

<h2>Welcome, { usersName }!</h2>

<a href="/open" class={buttonVariants({ variant: "outline" })}>
  Open Pack
</a>
