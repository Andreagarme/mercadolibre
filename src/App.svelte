<script>
  import { onMount } from "svelte";
  import { Footer } from "./lib/components/Footer";
  import { Navbar } from "./lib/components/Navbar";
  import { Product } from "./lib/components/Product";

  import "./app.css";

  let products = [];

  onMount(async () => {
    const response = await fetch("https://dummyjson.com/products");
    products = (await response.json()).products;
  });
</script>

<Navbar />

<div class="container my-16">
  {#if products?.length}
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center"
    >
      {#each products as product}
        <Product
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          thumbnail={product.thumbnail}
        />
      {/each}
    </div>
  {/if}
</div>

<Footer />
