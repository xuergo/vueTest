<template>
	<div >
		<div class="player" :id="playerId" ref="player"></div>
	</div>
</template>


<script>
	export default {
		  props:{
		        //引入的aliplayer，默认是2.8.2版本的aliplayer
		        jsPath: {
		            type: String,
		            default: "https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js"
		        },
		        //引入的aliplayer对应的H5播放器匹配的css，默认是2.8.2版本的aliplayer(注意需要和aliplayer版本一致)
		        cssPath: {
		            type: String,
		            default:"https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css"
		        },
		        //视频播放地址
		        source: {
		            type: String,
		            default: ""
		        },
		        //播放器的宽高比，默认16：9
		        width:{
		            type:String,
		            default:'100%'
		        },
		        ratio:{
		            type:String,
		            default:'1.78'
		        },
		        // 播放器自动循环播放
		        rePlay: {
		            type: Boolean,
		            default: false
		        },
		        // 默认使用h5播放器
		        useH5Prism: {
		            type: Boolean,
		            default: true
		        },
		        // 播放器是否自动播放，在移动端autoplay属性会失效。
		        autoplay: {
		            type: Boolean,
		            default: true
		        },
		    },
		data() {
			return {
				playerId: "inPlayer" + Math.random() * 100000000000000000 //保证播放器的唯一性,
			}
		},
		watch:{
		    source(newVal, oldVal) {
		        if(newVal!=oldVal&&newVal!=''){
		            this.lazyinit();
		        }
		    },
		},
		
		methods:{
		 //初始化，加载js和css
		    lazyinit(){
		        if (!window.Aliplayer) {
		            //尝试一下获取我们引入的js的标签
		            let inPlayerScriptTag = document.getElementById("inPlayerScriptTag");
		            
		            if(!inPlayerScriptTag){
		                // 不存在则创建 JS 标签
		                inPlayerScriptTag = document.createElement("script");
		                inPlayerScriptTag.type = "text/javascript";
		                inPlayerScriptTag.src = this.jsPath;
		                inPlayerScriptTag.id = "inPlayerScriptTag";
		                
		                // JS 不存在说明 CSS 也不存在，则创建 CSS 标签
		                let inPlayerLinkTag = document.createElement("link");
		                inPlayerLinkTag.type = "text/css";
		                inPlayerLinkTag.rel = "stylesheet";
		                inPlayerLinkTag.href = this.cssPath;
		                
		                // 获取页面的 <head> 标签,将JS和CSS插入到DOM中
		                let head = document.getElementsByTagName("head")[0];
		                head.appendChild(inPlayerScriptTag);
		                head.appendChild(inPlayerLinkTag);
		                
		                if(inPlayerScriptTag.loaded){
		                    //js插入并且加载完成了，初始化我们的播放器
		                    this.initPlayer()
		                }else{
		                    //未加载完成等待加载完成后初始化我们的播放器
		                    inPlayerScriptTag.addEventListener("load", () => {
		                        this.initPlayer();
		                    });
		                }
		            }     
		        } else {
		            console.log("全局实例存在直接初始化播放器");
		            this.initPlayer();
		        }
		    },
		    //播放器初始化
		    initPlayer(){
		        const player_height=100/this.reaio;
		        this.$nextTick(()=>{
		            //判断播放器实例是否存在
		            if(!this.inplayer){
		                let obj={
		                    id: this.playerId,
		                    userH5Prism: this.userH5Prism,
		                    rePlay: this.rePlay,
		                    autoplay: this.autoplay,
		                    source: this.source,
		                    width: this.width,
		                    heigth: `${player_height}vw`,
							isLive:true
		                }
		                this.inPlayer = new Aliplayer(obj);    
		            }else{
		               this.inPlayer.dispose();
		                // 将播放器实例重置
		                this.inPlayer = null;
		                // 清空播放器 DOM 内容
		                document.getElementById(this.playerId).innerHTML = "";
		                // 再次初始化
		                this.initPlayer();
		            }
		        })
		    }
		}


	}
</script>

<style scoped lang="scss">
	.aliplayer_box {
		z-index: 100;
		position: relative;
	}
</style>
