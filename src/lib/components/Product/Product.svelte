<script>
  import { Badge, Button, Card, Rating } from "flowbite-svelte";

  export let id;
  export let title;
  export let price;
  export let rating;
  export let thumbnail;
</script>

<Card padding="none">
  <img
    class="w-96 h-72 object-cover rounded-xl p-3"
    src={thumbnail}
    alt="product {id}"
  />

  <div class="px-5 pb-5 mt-4">
    <a href="/">
      <h5
        class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </h5>
    </a>

    <Rating {rating} size={24} class="mt-2.5 mb-5">
      <Badge slot="text" class="ml-3">{rating}</Badge>
    </Rating>

    <div class="flex justify-between items-center">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">
        {Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
        }).format(price)}
      </span>
      <Button href="/">Comprar</Button>
    </div>
  </div>
</Card>
