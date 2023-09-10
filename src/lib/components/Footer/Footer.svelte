<script>
  import {
    Footer,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup,
  } from "flowbite-svelte";

  const currentYear = new Date().getFullYear();
</script>

<Footer class="container">
  <FooterCopyright href="/" by="TrabajoCesde™" year={currentYear} />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="/">Trabaja con nosotros</FooterLink>
    <FooterLink href="/">Términos y condiciones</FooterLink>
    <FooterLink href="/">Accesibilidad</FooterLink>
    <FooterLink href="/">Ayuda/PQR</FooterLink>
  </FooterLinkGroup>
</Footer>
