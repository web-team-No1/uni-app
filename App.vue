
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// plus.screen.lockOrientation('landscape-primary'); //锁定
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	.status_bar {
	    height: var(--status-bar-height);  
	    width: 100%;  
	    background-color: #F8F8F8;  
	}  
	.top_view {  
	    height: var(--status-bar-height);  
	    width: 100%;  
	    position: fixed;  
	    background-color: #F8F8F8;  
	    top: 0;  
	    z-index: 999;  
	} 
	page {
	background-color: #FFFFFF;
	}
	/*每个页面公共css */
</style>
