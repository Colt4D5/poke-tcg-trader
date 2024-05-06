<script lang="ts">
  import { applyAction, enhance, type SubmitFunction } from '$app/forms'
  import { goto } from '$app/navigation';
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { toast } from "svelte-sonner";

  const login: SubmitFunction = () => {
    return async ({ result }) => {
      if (result?.data?.status === 200) {
        toast.success("Success!");
        setTimeout(() => {
          goto(result.data.location);
        }, 1500);
      } else if (result?.data?.status === 500) {
        toast(result.data.message);
      }
      applyAction(result);
    }
  }

  const signup: SubmitFunction = () => {
    return async ({ result }) => {
      await applyAction(result);
      if (result?.data?.status === 200) {
        toast.success("Successfully signed up!");
      } else if (result?.data?.status === 500) {
        toast(result.data.message);
      }
    }
  }

  // const { form } = $props();
</script>

<div id="login-wrapper"> 
  <Tabs.Root value="login" class="w-[400px]">
    <Tabs.List class="grid w-full grid-cols-2">
      <Tabs.Trigger value="login">Log In</Tabs.Trigger>
      <Tabs.Trigger value="signup">Sign Up</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="login">
      <Card.Root>
        <Card.Header>
          <Card.Title>Log In</Card.Title>
          <Card.Description>
           Input your username and password to log in 
          </Card.Description>
        </Card.Header>
        <form method="POST" action="?/login" use:enhance={login} >
          <Card.Content class="space-y-2">
              <div class="space-y-1">
                <Label for="login-username">Username</Label>
                <Input id="login-username" name="username" value="" type="text" minlength="6" maxlength="20" required />
              </div>
              <div class="space-y-1">
                <Label for="login-password">Password</Label>
                <Input id="login-password" name="password" value="" type="password" minlength="6" maxlength="20" required />
              </div>
          </Card.Content>
          <Card.Footer>
            <Button type="submit">Log In</Button>
          </Card.Footer>
        </form>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="signup">
      <Card.Root>
        <Card.Header>
          <Card.Title>Sign Up</Card.Title>
          <Card.Description>
           Fill out the form to sign up 
          </Card.Description>
        </Card.Header>
        <form method="POST" action="?/signup" use:enhance={signup}>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="signup-firstname">First Name</Label>
              <Input id="signup-firstname" name="firstname" type="text" required />
            </div>
            <div class="space-y-1">
              <Label for="signup-lastname">Last Name</Label>
              <Input id="signup-lastname" name="lastname" type="text" required />
            </div>
            <div class="space-y-1">
              <Label for="signup-email">Email</Label>
              <Input id="signup-email" name="email" type="email" required />
            </div>
            <div class="space-y-1">
              <Label for="signup-username">Desired Username</Label>
              <Input id="signup-username" name="username" type="text" minlength="6" maxlength="20" required />
            </div>
            <div class="space-y-1">
              <Label for="signup-password">Password</Label>
              <Input id="signup-password" name="password" type="password" minlength="6" maxlength="20" required />
            </div>
            <div class="space-y-1">
              <Label for="signup-conf-password">Confirm Password</Label>
              <Input id="signup-conf-password" name="confpassword" type="password" required />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button type="submit">Sign Up</Button>
          </Card.Footer>
        </form>
      </Card.Root>
    </Tabs.Content>
  </Tabs.Root>
</div>

<style>
  #login-wrapper {
    min-height: 100dvh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
