<template>
  <div class="plans">
    <PlanPackage :data="dataPackage"/>
    <PackageDetail :data="dataDetail"/>
    <Faq />
    <Trusted />
  </div>
</template>

<script>
import PlanPackage from '~/components/plans/PlanPackage.vue';
import PackageDetail from '~/components/plans/PackageDetail.vue';
import Faq from '~/components/plans/Faq.vue';

export default {
components: { PlanPackage, PackageDetail, Faq },
data() {
  return {
    dataPackage: [
      {
        classGradient: 'yellow',
        title: 'Professionals', 
        price: 'USD 49', 
        perMonth: '/ monthly per user', 
        text: 'Are you looking to access global intelligence and get ahead on the big issues?'
      },

      {
        classGradient: 'pink',
        title: 'Teams',
        price: 'USD 750', 
        perMonth: '/ monthly', 
        text: 'Benefit from a better research workflow and collaborate in the research process.'
      },

      {
        classGradient: 'violet',
        title: 'Enterprise',
        price: 'Bespoke solution', 
        perMonth: '', 
        text: 'I need an enterprise solution to help me broadcast intelligence within my organisation.'
      }
    ],

    dataDetail: [
      {
        paddingTop: 11.375,
        paddingBottom: 11,
        background: '#fff',
        mode: 'light',
        gradient: 'yellow',
        slogan: '<p>We empower</p> <p><span class="text-gradient-yellow">professionals</span></p> <p>to get the edge with AI Research.</p>',
        title: 'Stream, perfect for professionals',
        subTitle: '<p>One subscription to stay ahead on an unlimited number of big global issues.</p>',
        benefits: [
          {name: 'Personalised by Ai without any configuration'},
          {name: 'Unlimited standard briefings on big issues'},
          {name: 'Easily distil the 1% with Ai summary and analysis'},
          {name: '100,000 enterprise-grade sources'},
          {name: 'Built-in collaboration and repository'},
        ],
        priceUSD: 'USD 49',
        monthly: 'monthly per user',
        users: null,
        topics: null
      },

      {
        paddingTop: 11.375,
        paddingBottom: 8.125,
        background: '#F7F7F7',
        mode: 'light',
        gradient: 'pink',
        slogan: '<p>Help<span class="text-gradient-pink"> your team</span</p> <p>efficiently collaborate</p> <p>in the research process.</p>',
        title: 'AiR, perfect for teams',
        subTitle: '<p>An Ai process on top of 100,000 content sources for efficient strategic research.</p> <p>Everything in Stream +</p>',
        benefits: [
          {name: 'Configurable tool for targeted synthesis of data'},
          {name: 'Always on themes, trends and fringe'},
          {name: 'Publish curated briefings to your audience'},
          {name: 'Train your bespoke Strategic Ai'},
          {name: 'Research repository that can be dynamically updated'},
        ],
        priceUSD: 'USD 750',
        monthly: 'monthly',
        users: 5,
        topics: 3
      },

      {
        paddingTop: 19.5,
        paddingBottom: 9.5,
        background: '#100418',
        mode: 'dark',
        gradient: 'violet',
        slogan: '<p>A bespoke solution that integrates  into your</p> <p>in the research process. <span class="text-gradient-violet">Enterprise for 100+ users.</span></p>',
        title: 'Bespoke solutions for Enterprise',
        subTitle: '<p>Dynamic insights integrated in your platform to capture customer value.</p>',
        benefits: [
          {name: 'Empower leaders with fit-for-person industry monitor'},
          {name: 'Up to the minute intel on clients or their industry'},
          {name: 'Smarter content planning with dynamic gap analysis'},
          {name: 'Access historical content database'},
          {name: 'The power of expert + Ai'},
        ],
        priceUSD: null,
        monthly: null,
        users: null,
        topics: null
      },
    ]
  }
}
}
</script>

<style>

</style>