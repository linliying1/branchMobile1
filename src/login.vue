<template>
  <div class="loginDiv" >
  		<img id="logo" src="./assets/login/logo.png" />
  		<h3>商户服务平台</h3>
  		<div class="logingMain">
  			<div id="username" class="input">
  				<img src="./assets/login/user_name.png" />
  				<input v-model="username" style="width: 80%;" type="text" placeholder="用户名"/>
  			</div>
  			<div id="password" class="input">
  				<img src="./assets/login/password.png" />
  				<input v-model="password" style="letter-spacing: 2px;font-size: 16px;width: 80%;" type="password" placeholder="密码"/>
  			</div>
  			<div id="verification" class="input">
  				<img src="./assets/login/verification_code.png"/>
  				<input type="text"   v-model="picLyanzhengma" placeholder="验证码"/>
  			</div>
  			<input type="button" id="verification_code" @click="createCode" v-model="checkCode"></input>
  			
  			<div v-if="unPass" id="tips">
  				<img src="./assets/login/reminder.png" /><span>{{tipsText}}</span>
  			</div>
  		  <!--登录组件-->
  			<login-btn :handleText="loginText" @btnClick1='loginClick()'></login-btn>
  			
	  		<div id="other">
	     			
	     			<router-link to="/forgetPassword/phoneNum">忘记密码?</router-link>
	     			<router-link to="/register">商户注册<img src="./assets/login/leave_for.png"/></a></router-link>
	     		
	     	</div>
	    
  		</div>
  		
     
  </div>
</template>

<script>
	import $ from "jQuery"
	import LoginBtn from "@/components/btn"
export default {
  name: 'login',
  components: {
  	LoginBtn
  },
 created(){
 	this.createCode(),
 	this.username = this.$cookieStore.getCookie( 'username')
// 	this.password= this.$cookieStore.getCookie( 'password')
 },
  methods: {
  	createCode(){
//		this.unPass = false;
		  var code = ""; 
//		  	console.log(code)
		  var codeLength = 4;//验证码的长度 
		  var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
		     'S','T','U','V','W','X','Y','Z');//随机数 
		  for(var i = 0; i < codeLength; i++) {
		   //循环操作 
		   var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35） 
		   code += random[index];//根据索引取得随机数加到code上 
		  } 
		  this.checkCode = code;//把code值赋给验证码 
		},
  	checkLpicma(){   
		  this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写   
		  if(this.picLyanzhengma == '') {
		  	this.unPass = true;
		    this.tipsText = "请输入验证码"
		   
		  }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { 
		   //若输入的验证码与产生的验证码不一致时 
		   this.unPass = true;
		   this.tipsText = "验证码不正确"
//		   $("#tips span").text("验证码不正确")
		   this.createCode();//刷新验证码 
		   this.picLyanzhengma = '';
		  }else {
			this.unPass = false;
		   return true;
		  } 
		},

  	loginClick(){
  		
		
		
//			alert('读取cookie:+username:'+this.$cookieStore.getCookie('username')+'password:'+this.$cookieStore.getCookie( 'password'))
//		this.$cookieStore.delCookie( 'username')
//		this.$cookieStore.delCookie( 'password')

				
		
				
				
				
  		//点击登录检查合法性，合法后发送登录请求
  		 this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写   
		 	if(!this.username||!this.password){
		    this.unPass = true
			  this.tipsText = "用户名或密码不能为空"
		  }else if(this.picLyanzhengma == '') {
		  	this.unPass = true;
		    this.tipsText = "请输入验证码"
		  }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { 
		   //若输入的验证码与产生的验证码不一致时 
		    this.unPass = true;
		    this.tipsText = "验证码不正确"
		    this.picLyanzhengma = '';
		    this.createCode();//刷新验证码 
		  }else {
			  this.unPass = false;
		  }
		if(!this.unPass){
  			//通过验证，向后台发送登录请求
  			console.log('loginClick');
  			console.log('helloworld-Md5'+this.$md5(this.password))
  			var md5Password = this.$md5(this.password);
  			
				var param = "userName="+this.username+"&password="+md5Password;
				
				this.$http.post('http://120.24.71.32:8997/branch/rest/branchvue/login',param,{ headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
					.then((data)=>{
						
						console.log(data.data.returnCode);
						if(data.data.returnCode == '000000'){
							console.log(data);
							
//						将用户登录信息存进cookie
							this.$cookieStore.setCookie( 'username' ,this.username,60);
							if(this.password){
								this.$cookieStore.setCookie( 'password' ,this.$md5(this.password))
							}
//           登录成功后跳转到主页
	      			 this.$router.push({
          			 path: '/home'
          		 });
							}else if(data.data.description){
								this.unPass = true;
			  				this.tipsText = data.data.description;
			  			
							}
		      		
					},(err)=>{
						console.log(err)
					})

				
			
  			
  		}
  	}
  },
  data () {
    return {
     loginText: "登录",
     unPass:false,
     picLyanzhengma: '',
     checkCode: '',
     tipsText: '',
     username: '',
     password: ''
  }
}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
			padding-top: 160px;
			
		}
		.loginDiv #logo{
			width: 645px;
		
			height:58px;
		
			display: block;
			margin: 0 auto;
		
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
			/*height: 612px;*/
			border-radius: 10px;
			background:rgba(0,0,0,.28);
				padding-bottom: 35px;
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
		input{
		height: 80px;
		border-radius: 5px;
		background: #FFFFFF;
		border: 1px solid #ccc;/*px*/
		text-indent: 20px;
		outline: none;
	}
		
		.loginDiv .logingMain input{
			border: none;
			vertical-align: bottom;
			/*margin-bottom: 20px;*/
	   	background:rgba(0,0,0,0);
	   	color: #FFFFFF;
	   	font-size: 30px;
	   	outline: none;
	   	
		}
		.logingMain #verification{
			/*width: 390px;*/
			width:70%;
			/*margin-right: 20px;*/
		}
		
		
			.logingMain #verification input{
			width:70%;
		}
		#verification_code{
			text-align: center;
			width: 25%;
			color:blueviolet;
			height: 78px;
			background: #CCCCCC;
			display: inline-block;
			letter-spacing: 4px;
			/*vertical-align: bottom;*/
			margin-top: 30px;
			padding-right: 20px;
			border-radius: 50% 50%;
			float: right;
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
			position: relative;
			top: 5px;
		}
		
		
	
</style>
