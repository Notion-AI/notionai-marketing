<template>
  <div class="air">
    <Ai />
    <Benefits />
    <Airbox>
		<template v-slot:left>
			<div>
				<h2 class="box-title">
					<p>Configure and train your</p>
					<p><span>Strategic</span> AI on the go.</p>
				</h2>

				<p class="box-sub">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				</p>
			</div>
		</template>

		<template v-slot:right>
			<img src="~assets/images/air/box-1.png" alt="" class="mx-auto" />
		</template>
    </Airbox>

	<Airbox background="#F7F7F7" :reverse="window.width < 768 ? true : false">
		<template v-slot:left>
			<img src="~assets/images/air/box-2.png" alt="" class="mx-auto" />
		</template>

		<template v-slot:right>
			<div>
				<h2 class="box-title">
					<p><span>Synthesise</span> key themes</p>
					<p>on your strategic topics.</p>
				</h2>

				<p class="box-sub">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
		</template>
    </Airbox>

	<Airbox isBtn>
		<template v-slot:left>
			<div>
				<h2 class="box-title">
					<p>Track key <span>trends</span> and</p>
					<p>understand how the world</p>
					<p>is changing around your</p>
					<p>strategic topics.</p>
				</h2>

				<p class="box-sub">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				</p>

				<app-button
					nuxt
					to=""
					color="gradient-pink"
					style="width: 232px; height: 38px"
					class="mb-28 md:mb-0 mx-auto md:ml-0"
				>
					Start your free trial today
				</app-button>
			</div>
		</template>

		<template v-slot:right>
			<img src="~assets/images/air/box-3.png" alt="" class="mx-auto" />
		</template>
    </Airbox>
  </div>
</template>

<script>
import Ai from '~/components/air/Ai.vue';
import Benefits from '~/components/air/Benefits.vue';
import Airbox from '~/components/air/Airbox.vue';

export default {
  	components: { Ai, Benefits, Airbox },
  	data() {
        return {
			window: {
            	width: 0,
        	}
		}
    },

    created() {
		if (process.browser){
			window.addEventListener('resize', this.handleResize)
			this.handleResize();
		}
    },

    destroyed() {
		if (process.browser){
        	window.removeEventListener('resize', this.handleResize)
		}
    },

    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
        }
    }
}
</script>

<style>

</style>