<template>
    <div class="top-spacer-md">
      <div class="title-card">
        <section class="jumbotron text-center light-jumbotron">
          <div class="container">
            <h1><u>About RapidAir</u></h1>
            <router-link :to="{ name: 'Store' }" class="btn btn-blue">Store page</router-link>
            <router-link :to="{ name: 'Contact' }" class="btn btn-secondary">Contact us</router-link>
          </div>
        </section>
      </div>

      <div class="container marketing">
        <section class="text-center">
           <h4 class="text-center"><u>How will this product benefit me?</u></h4>
           <p>
             Our highest priority is the health and well being of families. Fresh air plays a vital role in the physical and emotional wellness of people at all ages, and 
             every role in the household can benefit from breathing cleaner. The struggle has been that clean air hasn’t been easily affordable or accessible. Rapid 
             Air exists to support the health of families in a convenient and cost-effective way. We offer pure mountain air in an easy to use can that offers dozens 
             of clean breaths for use by your entire family.
           </p>
        </section>
          
        <BenifitSection />

        <HistorySection />
      </div>      
    </div>
</template>

<script>
  import BenifitSection from './BenifitSection';
  import HistorySection from './HistorySection';

  export default {
    name: 'About',  
    components: {
      BenifitSection,
      HistorySection
    }
  }
/*

*/
</script>

<style scoped>
.featurette-divider {
  margin-top: 5em; 
  margin-bottom: 5em;
}
</style>