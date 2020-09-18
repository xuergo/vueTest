<template>
	<div class="home">
		<div class="box">
			<div @click="urlTo('live')">直播demo</div>
			<div @click="urlTo('live')">直播demo</div>
			<div @click="urlTo('live')">直播demo</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	methods: {
		urlTo(url){
			this.$router.push({ path: url })
		}
	}
};
</script>
<style lang="scss" scoped>
	.home{
		background-color: #34495e;
		min-height:100vh ;
		min-width: 100vw;
	}
	
	.box{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
			div{
				display: flex;
				justify-content: center;
				align-items: center;
			border-radius: 5px;
			background-color: #3498db;
			width: 300px;
			height: 100px;
			color: #FFFFFF;
			&:hover{
				opacity:0.5
			}
		}
	}
	
	
</style>