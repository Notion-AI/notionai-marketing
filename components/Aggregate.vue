<template>
	<div :class="type" class="aggregate">
		<div class="container mx-auto">
			<h2 class="aggregate__title">
				<p>{{ organisation_title_normal }} <span>{{ organisation_title_highlight }}</span></p>
			</h2>
	
			<div class="aggregate__btn">
				<app-button class="mx-auto" nuxt :to="{ 'name': organisation_btn_enterprise_router }" :color="type === 'stream' ? 'gradient-yellow' : 'gradient-pink'"
					style="width: 148px;">
					{{ organisation_btn_enterprise_text }}
				</app-button>
			</div>
	
			<div class="grid grid-cols-1 md:grid-cols-2 md: gap-5">
				<div class="aggregate__item" @click="active = 1">
					<div class="item-text">
						<p>{{ organisation_tab_left_text }}</p>
					</div>
	
					<div class="item-border" :class="{ 'active': active === 1 }"></div>
				</div>
	
				<div class="aggregate__item" @click="active = 2">
					<div class="item-text">
						<p>{{ organisation_tab_right_text }}</p>
					</div>
	
					<div class="item-border" :class="{ 'active': active === 2 }"></div>
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
	},

	props: {
		type: {
			type: String,
			default: 'air'
		},
		organisation_title_normal: {
			type: String,
			default: ''
		},
		organisation_title_highlight: {
			type: String,
			default: ''
		},
		organisation_btn_enterprise_text: {
			type: String,
			default: ''
		},
		organisation_tab_left_text: {
			type: String,
			default: ''
		},
		organisation_tab_right_text: {
			type: String,
			default: ''
		},
    organisation_btn_enterprise_router: {
			type: String,
			default: 'enterprise'
		}
	}
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_aggregate.scss";
</style>