<script>
  import {
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    Navbar,
  } from "flowbite-svelte";
</script>

<Navbar let:hidden let:toggle rounded class="bg-primary-500">
  <NavBrand href="/">
    <img
      src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png"
      class="mr-3 h-6 sm:h-9"
      alt="Logo de Mercadolibre"
    />
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Crea tu cuenta</NavLi>
    <NavLi href="/about">Ingresa</NavLi>
    <NavLi href="/about">Mis compras</NavLi>
  </NavUl>
</Navbar>
