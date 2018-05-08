<template>
	<div>
		<h1>this is app page for wsy haha</h1>
		<router-link to="/about">click me</router-link>
		<router-view></router-view>
	</div>
</template>
<script >
	import anime from 'animejs'
	export default {
		mounted() {
			console.log(anime, 'anime===>>>>>>>>>>>>')
			anime({
			  targets: 'div',
			  translateX: [
			    { value: 100, duration: 1200 },
			    { value: 0, duration: 800 }
			  ],
			  rotate: '1turn',
			  backgroundColor: '#FFF',
			  duration: 2000,
			  loop: true
			})
		}
	}

</script>