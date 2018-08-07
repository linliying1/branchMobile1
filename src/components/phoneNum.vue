<template>
	<div id="numberWrap" >
  			<p>使用注册时的手机号码找回</p>
  			<p><input type="text" placeholder="请输入手机号码" v-model="phoneNumber"  @change="changeCount()"/></p>
  			<p><input type="text" placeholder="请输入短信验证码" />
  				<input type="button" :class="{'sended':hadSended}" value="获取验证码" @click="sendMess" />
  			</p>
  			<div v-if="unPass" class="tips">
  				<img src="../assets/login/reminder.png" /><span>{{tipsText[1].text}}</span>
  			</div>
  			<btn style="background: #b3b3b3;margin-top: 0px;" :class="{'nextBlue':next}" :handleText='content' @btnClick1="toReset"></btn>
  			<div class="notice">员工账号重置需联系店主在商户管理管理里面重置</div>
  </div> 
</template>

<script>
import Btn from './btn'
	export default{
		components: {
			Btn
		},
		watch: {
			phoneNumber(){
				if(/^1\d{10}$/.test(this.phoneNumber) ){
					this.hadSended = true
				}else{
					this.hadSended = false
				}
			}
		},
		http: {
		  headers: {'Content-Type': 'application/json'}
		},
		methods: {
			toReset(){
//				if('验证通过')
				   this.$router.replace('/resetPassword')
			},
			sendMess(){
				var param = {"phoneNum":"13420109570","smsType":7}
				this.$http.post('http://120.24.71.32:8997/branch/rest/branchvue/sendSmsVerifyCode',param)
					.then((data)=>{
						console.log(12345)
		               
					},(err)=>{
						console.log(err)
					})
			}
		},
		data(){
			return{
				phoneNumber:'',
				content:'下一步',
				 unPass:true,
				 hadSended:false,
				 next:false,
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

<style scoped>
	#numberWrap{
		padding-top: 10px;
	}
	#numberWrap p:nth-of-type(1){
		margin: 32px 0;
		font-size: 26px;
		color: rgb(51,51,51);
	}
	#numberWrap p:nth-of-type(2) input{
		width: 100%;
		margin-bottom: 52px;
	}
	#numberWrap p:nth-of-type(3) input:nth-of-type(1){
		width: 56%;
		margin-right: 20px;
		margin-bottom: 90px;
	}
	#numberWrap p:nth-of-type(3) input:nth-of-type(2){
		background: #e5e5e5;
		width: 220px;
		height:80px ;
		border-radius: 6px;
		text-align: center;
		color: #999999;
		float: right;
	}

	.sended{
		background: #0093e5 !important;
		color: #FFFFFF !important;
	}
	.nextBlue{
		background:#0093e5 !important;
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
</style>