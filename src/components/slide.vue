<template>
	<div class="slide">
		<div class="top" ref="top">
		  <div class="top-banner">
		    <img v-for="(item, index) of list" :key="index" :src="item" alt="">
		  </div>
		</div>
		<div class="bottom" ref="bottom">
		  <div class="bottom-banner">
		    <img v-for="(item, index) of list" :key="index" :src="item" :class="{active : nowIndex === index}" @click="toggelBanner(index)" />
		  </div>
		  <div class="btn">
		    <a href="javascript:;" @click="leftBanner"><</a>
		    <a href="javascript:;" @click="rightBanner">></a>
		  </div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default {
		data() {
			return {
				nowIndex: 0,
				list: [
				  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f69f6975b7def933aa0856340df34548.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
				  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cac96e3dd740cfd6384986cebdbface.jpg?w=2452&h=920',
				  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17728eaeb111572cf03e4962205f2ba6.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
				  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e52c3e98602b90f198ec316dce253cba.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
				  'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad84d80e7fc5990162a387a6b103af01.jpeg?thumb=1&w=1226&h=460&f=webp&q=90',
				  'https://img.alicdn.com/tfs/TB1lNVuoGL7gK0jSZFBXXXZZpXa-520-280.png_q90_.webp',
				  'https://img.alicdn.com/imgextra/i1/14703471/TB2wBitl3fH8KJjy1zcXXcTzpXa_!!14703471-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
				  'https://img.alicdn.com/imgextra/i1/1882333525/TB2NxwisYSYBuNjSspfXXcZCpXa_!!1882333525-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
				  'https://img.alicdn.com/imgextra/i4/1987612606/TB2aY1Zu7OWBuNjSsppXXXPgpXa_!!1987612606-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
				  'https://img.alicdn.com/imgextra/i1/1057320566/TB2RD3spRUSMeJjy1zkXXaWmpXa_!!1057320566-0-daren.jpg_180x180xzq90.jpg_.webp',
				  'https://img.alicdn.com/imgextra/i3/111094980/TB2YX_FoBUSMeJjy1zkXXaWmpXa_!!111094980-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
				  'https://img.alicdn.com/tfscom/i3/2996558363/TB2a.PkdcIrBKNjSZK9XXagoVXa_!!2996558363.jpg_180x180xzq90.jpg_.webp',
				  'https://img.alicdn.com/imgextra/i3/758509975/TB21UPSxhGYBuNjy0FnXXX5lpXa_!!758509975-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
				  'https://img.alicdn.com/imgextra/i3/1840508859/TB227FSgHGYBuNjy0FoXXciBFXa_!!1840508859-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp'
				],
				scrollX: 0,
			}
		},
		mounted() {
		  this.initScroll();
		},
		computed: {
			viewAreaWidth() {
				return this.bottomDom ? this.bottomDom.offsetWidth : 0;
			},
			listWidth() {
				return 
				this.bottomDom 
				?this.bottomDom.children[0].offsetWidth - this.viewAreaWidth : 0;
			},
		},
		methods: {
		  initScroll() {
		    let topDom = this.$refs.top;
		    let topDomChl = topDom.children[0];
		    this.bottomDom = this.$refs.bottom;
		    let bottomDomChl = this.bottomDom.children[0];
				
		    this.topScroll = new BScroll(topDom, {
		      scrollX: true,
		      scrollY: false,
		      momentum: false,
		      snap: {
		        loop: false,
		        threshold: 0.1
		      }
		    });
		
		    topDomChl.style.width = 800 * topDomChl.children.length + 'px';
		
		    this.bottomScroll = new BScroll(this.bottomDom, {
		      scrollX: true,
		      scrollY: false,
		      click: true,
					probeType: 3,
					momentum: true,
		    });
		
		    bottomDomChl.style.width = 95 * bottomDomChl.children.length + 'px';
		
		    this.topScroll.on('scrollEnd', () => {
		      let { pageX } = this.topScroll.getCurrentPage();
		      this.nowIndex = pageX;
					this.handleBottomScroll(pageX);
		      //this.bottomScroll.scrollTo(-pageX * 95, 0)
		    })
				
				this.bottomScroll.on('scroll', (pos) =>{
						//获取实时滚动的距离 使用scrollY接收         
						this.scrollX = Math.round(pos.x)
						// console.log(this.scrollX);
				})
		
		  },
		  refresh() {
		    this.topScroll && this.topScroll.refresh();
		    this.bottomScroll && this.bottomScroll.refresh();
		  },
			handleBottomScroll(index) {
				let dom = this.bottomDom;
				let domChild = this.bottomDom.children[0];
				if (domChild.children.length <= index) return
				let viewAreaWidth = dom.offsetWidth;
				let el = domChild.children[index];
				const offsetLeft = el.offsetLeft;
				const half = (viewAreaWidth - el.offsetWidth) / 2;
				let changeX = 0;
				const absTransX = Math.abs(this.scrollX);
				
				let listWidth = domChild.offsetWidth - viewAreaWidth;
				
				if (offsetLeft <= absTransX + half) { // item偏左，需要往右移
					let pageX = offsetLeft + this.scrollX
					changeX = half - pageX
				} else { // item偏右，需要往左移
					changeX = -(offsetLeft - absTransX - half)
				}
				let lastX = changeX + this.scrollX
				// 两种边界情况
				lastX > 0 && (lastX = 0)
				lastX < -listWidth && (lastX = -listWidth)
				console.log(lastX, '----');
				//this.reBounding = true
				//this.translateX = lastX
				this.bottomScroll && this.bottomScroll.scrollTo(lastX, 0, 200);
			},
		  toggelBanner(index) {
		    if(index === this.nowIndex) return;
				this.nowIndex = index;
				this.topScroll && this.topScroll.goToPage(index);		
		  },
		  leftBanner() {
		    this.topScroll && this.topScroll.prev();
		  },
		  rightBanner() {
		    this.topScroll && this.topScroll.next();
		  }
		}
	}
</script>

<style lang="less" scoped="scoped">
	.slide {
	  width: 800px;
	  margin:  50px auto;
	}
	.top {
	  width: 800px;
	  height: 300px;
	  overflow: hidden;
	}
	.top-banner {
	  width: 3000px;
	  height: 300px;
	  overflow: hidden;
	}
	.top-banner img {
	  float: left;
	  width: 800px;
	  height: 300px;
	}
	.bottom {
	  position: relative;
	  width: 800px;
	  height: 80px;
	  overflow: hidden;
	  margin-top: 20px;
	}
	.bottom-banner img{
	  float: left;
	  width: 80px;
	  height: 80px;
	  margin-right: 15px;
	  border-radius: 8px;
	  opacity: 0.6;
	}
	.bottom-banner {
	  width: 300px;
	  height: 80px;
	  overflow: hidden;
	}
	.bottom-banner img.active {
	  opacity: 1;
	}
	.btn a{
	  position: absolute;
	  top: 50%;
	  -webkit-transform: translateY(-50%);
	     -moz-transform: translateY(-50%);
	      -ms-transform: translateY(-50%);
	       -o-transform: translateY(-50%);
	          transform: translateY(-50%);
	  width: 50px;
	  height: 50px;
	  border-radius: 50%;
	  background: yellowgreen;
	  color:  #fff;
	  font-size: 30px;
	  font-weight: bold;
	  text-align: center;
	  line-height: 50px;
	  text-decoration: none;
	}
	.btn a:first-child {
	  left: 20px;
	}
	.btn a:last-child {
	  right: 20px;
	}
</style>
