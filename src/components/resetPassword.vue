<template>
	<div class="setNewPassword">
  		
  			<div class="bar">
				<a href="/forgetPassword/phoneNum"><img src="../assets/login/back.png" /></a>
				<span>设置新密码</span>
			</div>
			<div class="wrap">
			<div id="resetInputWrap">
				<p>重新设置您的登录密码</p>
	  			<p><input type="text" placeholder="请输入新的登录密码" v-model="password1"/></p>
	  			<p><input type="text" placeholder="请再次输入新的登录密码" v-model.lazy="password2" /></p>
			</div>
			<div v-if="unPass" class="tips">
	  				<img src="../assets/login/reminder.png" /><span>两次输入的密码不一致</span>
	  			
	  		</div>
	  		<p id="pass" v-if="passText">设置新密码成功，即将跳转到登录页面...</p>
	  	<btn :handleText='content' @btnClick1="toLogin"></btn>
  		</div>
  	</div>
</template>

<script>
import Btn from './btn'
	export default{
//		watch: {
//			password2(){
//				if(this.password1){
//					this.unPass = true
//				}else{
//					this.unPass = false
//				}
//			}
//		},
		components: {
			Btn
		},
		methods: {
			toLogin(){
				//两次密码相同，向后台提交新密码后跳转到登录页面
				if(this.password1!=this.password2){
					this.unPass = true,
					this.password1 =this.password2=''
					
				}else{
					this.unPass = false,
					console.log('两次密码相同，向后台提交密码，去登陆')
//					这里向后台发送请求
//					后台返回成功后再设置变绿和跳转
					this.passText = true,
					
					setTimeout(()=>{
						 this.$router.replace('/')
					},3000)
				}
			}
		},
		data(){
			return{
				password1: '',
				password2: '',
				unPass:false,
				content: '确定',
				passText:false
			}
		}
	}
</script>

<style scoped>
.wrap{
	padding: 0 54px;
}

	.setNewPassword .bar{
		background: rgb(0,147,229);
		height: 88px;
		width: 100%;
		line-height: 88px;
		text-align: center;
	}
	.setNewPassword .bar img{
		width:30px ;
		height:40px ;
		float: left;
		margin-left: 30px;
		margin-top: 20px;
	}
	.setNewPassword .bar span{
		color: #FFFFFF;
		margin-left: -15px;
		vertical-align: top;
		font-size: 36px;
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
		width: 100%;
	}
	#resetInputWrap p:nth-of-type(3){
		margin: 50px 0 90px 0;
	}
	#resetInputWrap p:nth-of-type(1){
		margin: 50px 0 32px 0;
		font-size: 26px;
		color: rgb(51,51,51);
	}
	
	 .tips{
			margin-top: -60px;
			position: absolute;
			/*top: 0;*/
		}
		.tips img{
			width: 28px;
			height: 28px;
			display: inline-block;
			position: relative;
			top: 4px;
			margin-right: 20px;
		}
		.tips span{
			color: rgb(240,35,44);
		}
		 #pass{
			color: green;
			margin-top: -60px;
			position: absolute;
		}
</style>