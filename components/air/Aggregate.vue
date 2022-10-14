<template>
    <div class="aggregate">
		<div class="container mx-auto">
			<h2 class="aggregate__title">Aggregate multiple licenses under one organisation and empower employees to <span>collaborate on content.</span></h2>

			<div class="aggregate__btn">
				<app-button
					class="mx-auto"
					nuxt to=""
					color="gradient-pink"
					style="width: 148px;"
				>
					Visit Enterprise
				</app-button>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 md: gap-5">
				<div class="aggregate__item" @click="active = 1">
					<div class="item-text">
						<p>Looking to grow your business with</p>
						<p>data-driven insights for your customers?</p>
					</div>

					<div class="item-border" :class="{'active': active === 1}"></div>
				</div>

				<div class="aggregate__item" @click="active = 2">
					<div class="item-text">
						<p>Use our workflow to efficiently</p>
						<p>curate content and publish to your audience.</p>
					</div>

					<div class="item-border" :class="{'active': active === 2}"></div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			active: 1
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/air/_aggregate.scss";
</style>