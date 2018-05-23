<template>
	<div id="Dashboard">
		<h1 class="h1">welcome ann's home</h1>
		<Button type="warning" class="btn" @click="turnInAbout">click me</Button>
	</div>
</template>
<style lang="scss">
	#Dashboard {
		position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    background: #18212D;
    h1 {
    	color: red;
    	font-size: 100px;
    	width: 100%;
    	top: 15%;
    	text-align: center;
    }
	}
	.btn {
	}
	div.cricle {
    /*position: absolute;*/
    top: 50%;
    left: 50%;
    width: 2rem;
    height: 2rem;
    margin: -1rem 0 0 -1rem;
    background: #FFF;
    transform: scale(0);
    border-radius: 50%;
    z-index: 900;
  }
</style>
<script >
	import anime from 'animejs'
	export default {
		mounted() {
			this.$nextTick(()=>{
				this.setAnimation()
			})
		},
		methods: {
			turnInAbout() {
				this.$router.push({
					path: '/about'
				})
			},
			setAnimation() {
				const maxElements = 200
				const duration = 10000
				let toAnimate = []
				var w = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight
				var colors = ['#FF324A', '#31FFA6', '#206EFF', '#FFFF99']

				var createElements = (function() {
					var fragment = document.createDocumentFragment()
					for (var i = 0; i < maxElements; i++) {
						var el = document.createElement('div')
						el.setAttribute('class', 'cricle')
						el.style.background = colors[anime.random(0, 3)]
						el.style.transform = 'rotate('+anime.random(-360, 360)+'deg)'
						toAnimate.push(el)
						fragment.appendChild(el)
					}
					document.getElementById('Dashboard').appendChild(fragment)
				})()

				const animate = function(el) {
					anime({
						targets: el,
						rotate: anime.getValue(el,'rotate'),
						translateX: [0, w/2],
						translateY: [0, w/2],
						scale: [0, 2],
						delay: anime.random(0, duration),
						duration: duration,
						easing: "easeInCubic",
						loop: true
					})
				}

				toAnimate.forEach(animate)
				anime({
		      targets: '.h1',
		      color: '#000',
		      duration: 5000,
		      loop: true,
		      direction: 'alternate',
		      easing: 'easeOutQuad'
		    })
			}
		}
	}

</script>