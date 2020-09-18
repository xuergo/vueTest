<template>
	<div>
		<div style="width: 500px;height: 500px;">
			<aliplayer :source="url"  ></aliplayer>
		</div>
	</div>
</template>


<script>
import aliplayer from '../components/aliplayer.vue'
	export default {
		components:{
			aliplayer
		},
		data() {
			return {
				url:' '
			}
		},
		mounted() {
			//模拟调取接口
			this.getUrl();
		},
		methods: {
			getUrl(){
				setTimeout(()=>{
				this.url="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8";	
				},100)
			}
			
		}

	}
</script>

<style scoped lang="scss">
	.aliplayer_box {
		z-index: 100;
		position: relative;
		width: 100vw;
		background: black;
	}
</style>
