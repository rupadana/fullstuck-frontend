<template>
    <Layout>
        <p>Name : {{ $page.strapi.products[0].name }}</p>
        <p>Amount : {{ $page.strapi.products[0].amount }}</p>
    </Layout>
</template>

<page-query>
query($id: String!) {
  strapi {
    products(where: { id: $id }) {
      name
      amount
      qty
    }
  }
}
</page-query>
<script>

export default {

}
</script>

<style>

</style>