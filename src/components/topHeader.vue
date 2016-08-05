<template>
	<nav class="navbar" id="navbar">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" v-link="'page1'">Logo</a>
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				 <ul class="nav navbar-nav">
			        <li><a v-link="{path:'/',exact:true}">首页</a></li>
			        <li><a v-link="{path:'/page2'}">个人主页</a></li>
			        <li>
			          	 <a v-on:click="toggle">收藏<span class="caret"></span></a>
				          <ul class="dropdown-menu" role="menu" v-show="needshow">
				            <li><a href="#">Action</a></li>
				            <li><a href="#">Another action</a></li>
				            <li><a href="#">Something else here</a></li>
				            <li class="divider"></li>
				            <li><a href="#">Separated link</a></li>
				            <li class="divider"></li>
				            <li><a href="#">One more separated link</a></li>
				          </ul>
			        </li>
			     </ul>
			</div>
		</div>
	</nav>
</template>
<script>
	export default{
		data(){
			return{
				needshow:false,
			}
		},
		props:{
			
		},
		components(){
		   var me=this
		 	var toggle=function(){
		 		if(me.needshow){
		 			me.needshow=false
		 		}else{
		 			me.needshow=true
		 		}
		 	}
		 },
		 methods:{
		 	
		 },
	}
</script>
<style>
  .navbar{
  	background:#f7f7f7;
  }
  #navbar .v-link-active{
    background:#c7c7c7;
  }
</style>