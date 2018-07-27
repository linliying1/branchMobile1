<template>
  <div class="loginDiv" >
  		<img id="logo" src="./assets/login/logo.png" />
  		<h3>商户服务平台</h3>
  		<div class="logingMain">
  			<div id="username" class="input">
  				<img src="./assets/login/user_name.png" />
  				<input type="text" placeholder="用户名"/>
  			</div>
  			<div id="password" class="input">
  				<img src="./assets/login/password.png" />
  				<input style="letter-spacing: 2px;font-size: 16px;width: 80%;" type="password" placeholder="密码"/>
  			</div>
  			<div id="verification" class="input">
  				<img src="./assets/login/verification_code.png"/>
  				<input type="text" placeholder="验证码"/>
  			</div>
  			<div id="verification_code"></div>
  			
  			<div v-if="unPass" id="tips">
  				<img src="./assets/login/reminder.png" /><span>{{tipsText[1].text}}</span>
  			</div>
  		  <!--登录组件-->
  			<login-btn :handleText="loginText" @btnClick1='loginClick()'></login-btn>
  			
	  		<div id="other">
	     			
	     			<router-link to="/forgetPassword">忘记密码</router-link>
	     			<router-link to="/register">商户注册<img src="./assets/login/leave_for.png"/></a></router-link>
	     		
	     	</div>
	    
  		</div>
  		
     
  </div>
</template>

<script>
	import LoginBtn from "@/components/btn"
export default {
  name: 'login',
  components: {
  	LoginBtn
  },
  methods: {
  	loginClick(){
  		//点击登录检查合法性，合法后发送登录请求
  		console.log('loginClick')
  	}
  },
  data () {
    return {
     loginText: "登录",
     unPass:true,
     tipsText: [
     	{
     		id:1,
     		text:"验证码不能为空"
     	},
     	{
     		id:2,
     		text:"验证码输入有误"
     	},
     	{
     		id:3,
     		text:"输入的用户名或密码有误"
     	}
     ]
  }
}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		*{
			-moz-box-sizing: border-box; /*Firefox3.5+*/
			-webkit-box-sizing: border-box; /*Safari3.2+*/
			-o-box-sizing: border-box; /*Opera9.6*/
			-ms-box-sizing: border-box; /*IE8*/
			box-sizing: border-box;
		}
		.loginDiv{
	 
			width: 100%;
			height: 100%;
			margin: 0 auto;
			background-image: url(./assets/login/bg-img.jpg);
			background-size: 100% 100% ;
			padding: 0 54px;
			margin-right: 0;
		
			
		}
		.loginDiv #logo{
			width: 645px;
			margin: 0 auto;
			height:58px;
			margin-top: 160px;
			
		}
		.loginDiv h3{
			font-family: "微软雅黑";
			font-weight: bold;
			text-align: center;
			font-size: 42px;/*px*/
			color: rgb(0,147,229);
			line-height: 42px;
			margin:38px 0;
			margin-bottom: 48px;
		}
		.loginDiv .logingMain{
			padding: 0 32px;
			padding-top: 10px;
			width:100%;
			height: 612px;
			border-radius: 10px;
			background:rgba(0,0,0,.28);
			
		}
		.logingMain .input{
			display: inline-block;
			width: 100%;
			height:110px;
			/*background: pink;*/
		  line-height: 110px;
			border-bottom: 1px solid #fff;
			padding-left: 10px;
		}
		.loginDiv .logingMain .input img{
			width: 40px;
			height: 44px;
			margin-right:30px;
			margin-bottom: 20px;
			vertical-align: bottom;
		}
		
		
		input::-webkit-input-placeholder { 
		 /* WebKit browsers */ 
		color: #FFFFFF; 
		font-size: 30px;
		letter-spacing: 0;
		} 
		input:-moz-placeholder { 
		/* Mozilla Firefox 4 to 18 */ 
		color: #fff; 
		font-size: 30px;
		letter-spacing: 0;
		} 
		input::-moz-placeholder { 
		 /* Mozilla Firefox 19+ */ 
		color: #fff; 
		font-size: 30px;
		letter-spacing: 0;
		} 
		input:-ms-input-placeholder{ 
		 /* Internet Explorer 10+ */ 
		color: #fff; 
		font-size: 30px;
		letter-spacing: 0;
		}
		
		
		.loginDiv .logingMain input{
			border: none;
			vertical-align: bottom;
			margin-bottom: 20px;
	   	background:rgba(0,0,0,0);
	   	color: #FFFFFF;
	   	font-size: 30px;
	   	outline: none;
	   	
		}
		.logingMain #verification{
			width: 390px;
			margin-right: 20px;
		}
		
		
			.logingMain #verification input{
			width: 70%;
		}
		#verification_code{
			width: 160px;
			height: 78px;
			background: #fff;
			display: inline-block;
			vertical-align: bottom;
			
		}
		.logingMain #tips{
			margin: 24px 0;
			position: absolute;
		}
		.logingMain #tips img{
			width: 28px;
			height: 28px;
			display: inline-block;
			position: relative;
			top: 4px;
			margin-right: 20px;
		}
		.logingMain #tips span{
			color: rgb(240,35,44);
		}
		
		
		#loginBtn{
			margin-top: 76px;
			}
		
		#other{
			
			/*background: pink;*/
			margin-top:35px ;
			font-size: 30px;
			color: #FFFFFF;
			max-height: 40px;
			line-height: 40px;
		}
		#other a{
			color: #FFFFFF;
			vertical-align: top;
			text-decoration: none;
		}
		#other a:nth-of-type(2){
			float: right;
		}
		#other a img{
			width: 37px;
			height: 32px;
		}
</style>
