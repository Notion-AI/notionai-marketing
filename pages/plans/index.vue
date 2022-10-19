<template>
  <div class="plans">
    <PlanPackage />
    <PackageItem :data="dataPackage"/>
    <Faq />
    <Trusted />
  </div>
</template>

<script>
import PlanPackage from '~/components/plans/PlanPackage.vue';
import PackageItem from '~/components/plans/PackageItem.vue';
import Faq from '~/components/plans/Faq.vue';

export default {
    components: { PlanPackage, PackageItem, Faq },
    data() {
        return {
            dataPackage: [
                {}
            ]
        }
    }
}
</script>

<style>

</style>