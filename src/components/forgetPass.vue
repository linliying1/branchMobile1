<template>
	<div class="forgetWrap">
		<div class="bar">
			<a href="/otherPages"><img src="../assets/login/back.png" /></a>
			<span>重置密码</span>
		</div>
		<div class="tab">
			<div><router-link to="/forgetPassword/phoneNum" >通过手机号重置</router-link></div>
			<div><router-link to="/forgetPassword/email">通过邮箱重置</router-link></div>
		</div>
		<div id="routetView">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>

<style>
	.forgetWrap .bar{
		background: rgb(0,147,229);
		height: 88px;
		width: 100%;
		line-height: 88px;
		text-align: center;
	}
	.forgetWrap .bar img{
		width:30px ;
		height:40px ;
		float: left;
		margin-left: 30px;
		margin-top: 20px;
	}
	.forgetWrap .bar span{
		color: #FFFFFF;
		margin-left: -15px;
		vertical-align: top;
		font-size: 36px;
	}

	.forgetWrap .tab{
		background: #f6f6f6;
		height: 100px;
		line-height: 96px;
		font-size: 0;
		padding: ;
	}
	.tab div{
		box-sizing: border-box;
		display: inline-block;
		padding: 0 10px;
		width: 50%;
		/*background: palegoldenrod;*/
			text-align: center;
	}
	.tab a{
		text-decoration: none;
	
		/*background: gold;*/
		color: #999;
		display: inline-block;
		font-size: 32px;
		text-align: center;
		border-bottom: 4px solid  #f6f6f6;/*px*/
		width: 270px;
		margin: 0 auto;
	}
	
	.tab .router-link-active{
		color: #0093e5;
		border-bottom: 4px solid #0093E5;/*px*/
	}
	#routetView{
		
		padding: 0 86px;
	}
	
	input::-webkit-input-placeholder { 
		 /* WebKit browsers */ 
		color: #c9c9cf; 
		font-size: 28px;
		} 
		input:-moz-placeholder { 
		/* Mozilla Firefox 4 to 18 */ 
		color: #c9c9cf; 
		font-size: 28px;
		} 
		input::-moz-placeholder { 
		 /* Mozilla Firefox 19+ */ 
		color: #c9c9cf; 
		font-size: 28px;
		} 
		input:-ms-input-placeholder{ 
		 /* Internet Explorer 10+ */ 
		color: #c9c9cf; 
		font-size: 28px;
		}
		
	input{
		height: 80px;
		border-radius: 5px;
		background: #FFFFFF;
		border: 1px solid #ccc;/*px*/
		text-indent: 20px;
		outline: none;
	}
	.notice{
		margin-top: 40px;
		font-size: 24px;
		color:rgb(240,35,44);
		/*margin-left:20px ;*/
		text-align: center;
		
	}
</style>