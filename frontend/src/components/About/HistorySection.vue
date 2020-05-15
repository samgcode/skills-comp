<template>
    <div>
     <hr class="featurette-divider top-spacer bottom-spacer">
        <div class="row">
          <div class="row featurette">
            <div class="col-md-7">
              <h1 class="featurette-heading"><u>Why we started RapidAir</u></h1>
              <p>
                We're entrepreneurs, nature lovers and people with ambition. There was a demand in 
                the marketplace being met by poor quality products.
              </p>
              <p>
                Existing products used canned and bagged air and wasted so much. We built innovative 
                technology that gives the customer far more air and far more value. The competition 
                was collecting normal air that didn't offer a unique experience. So we began capturing 
                the freshest mountain air to give the best quality breathing. Pricing made buying air 
                difficult to afford. Our technology makes bottling air and delivering it cheaper than it's
                ever been.
              </p>
              <p class="lead">
                So why did we start RapidAir? Because we think this product matters, and 
                we knew there was a better way of giving it to people. We're committed to
                delivering the best, and our customers are getting an unsurpassed product
                as a result.
              </p>
            </div>
            <div class="col-md-5">
              <img src="@/assets/glass_bottles_line.jpg" alt="Image of glass bottles in a line"
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550">
            </div>
          </div>
        </div>

        <FounderSection />

        <hr class="featurette-divider top-spacer bottom-spacer">
        <div class="row">
          <div class="row featurette">
            <div class="col-md-5">
              <img src="@/assets/guy_standing_mountain.jpg" alt="image of a person standing on mountain"
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="550" height="550">
            </div>
            <div class="col-md-7">
              <h1 class="featurette-heading"><u>The history of RapidAir</u></h1>
              <p>
                RapidAir believes everyone should be entitled to fresh clean air, but we know that isn't
                always possible due to where they are located. However, we make the impossible,
                possible. Our goal is to continually progress towards perfection. We are committed to 
                finding the best possible air, capturing it in an unsurpassed method, and supplying it to 
                our customers in a never seen before approach.
              </p>
              <h5><u>We are a legendary company.</u></h5>
              <p class="top-spacer-sm">
                With that in mind, RapidAir was founded. Fred felt the need to provide fresh clean air to
                everyone who couldn't access it, but had no idea where to start on capturing the air. He
                made several phone calls to his friends and acquaintances and surely enough, he was 
                able to find another person who shared the same vision as Fred. The phone call was to 
                Jennifer, who as a former Commercial Diver possesses all the knowledge and qualities 
                needed to Enhance Rapid, One Breath At A Time.
              </p>
              <p class="lead">
                One week later our adventure began, and RapidAir was founded.
              </p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import FounderSection from './FounderSection';

export default {
    name: 'HistorySection',
    components: {
        FounderSection,
    }
}
</script>