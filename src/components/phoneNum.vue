<template>
	<div id="numberWrap" >
  			<p>使用注册时的手机号码找回</p>
  			<p><input type="text" placeholder="请输入手机号码" @blur="testPhone" v-model="phoneNumber" maxlength="11"/></p>
  			<p><input type="text" v-model="message" maxlength="4" placeholder="请输入短信验证码" />
  				<input type="button" :class="{'sended':hadSended}" v-model="btnText" @click="sendMess" />
  			</p>
  			<div v-if="unPass" class="tips">
  				<img src="../assets/login/reminder.png" /><span>{{tipsText}}</span>
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
				if(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNumber) ){
					this.hadSended = true
					this.unPass = false;
					this.flag = true
				}else{
					
					this.hadSended = false
//					this.tipsText = '请输入正确的手机号'
				}
			},
			message(){
				console.log(!this.unPass)
				if(this.flag &&this.message){
					this.next = true;
				
				}else{
					this.next = false;
				}
			}
		},
		
		http: {
		  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		},
		methods: {
			testPhone(){
				if(!this.hadSended) {
					this.unPass = true;
					this.tipsText = '请输入正确的手机号'
				}
				
				
			},
			toReset(){
				
				if(this.next){

				var Param = "phoneNum="+this.phoneNumber+"&verifyCode="+this.message+"&smsType=7"
				this.$http.post("http://120.24.71.32:8997/branch/rest/branchvue/checkVerifyCode",Param)
					.then((data)=>{
						
						
						if(data.data.returnCode == '000000'){
							this.unPass = false;
							this.$router.replace('/resetPassword')//下一步
						}else{
							this.unPass = true;
							this.tipsText = data.data.description;
						}
		      		
					},(err)=>{
						console.log(err)
					})
				}
//				   
			},
			sendMess(){
				if(this.hadSended ){
					var param = "phoneNum="+this.phoneNumber+"&smsType=7";
					this.$http.post('http://120.24.71.32:8997/branch/rest/branchvue/sendSmsVerifyCode',param)
					.then((data)=>{
						if(data.data.returnCode = '000000'){
							console.log(data);
							
						       this.show = false;
							   const TIME_COUNT = 60;   
							   if (!this.timer) {    
							   this.count = TIME_COUNT;    
							   
							   this.timer = setInterval(() => {    
							    if (this.count > 0 && this.count <= TIME_COUNT) {     
							    this.count--;    
							    	this.btnText = this.count+' s'
							    } else {     
							    this.show = true;     
							    clearInterval(this.timer);     
							    this.timer = null;     
							    this.hadSended = true;
							    this.message = '';
							    this.btnText = "重新发送";
							    }    
							   }, 500)    
							   }
														
							
							this.hadSended = false;//发送验证码后把按钮置灰色
							
						}
		               
					},(err)=>{
						console.log(err)
					})
				}
			}
		},
		data(){
			return{
				phoneNumber:'',
				content:'下一步',
				flag:false,
				 unPass:false,
				 hadSended:false,
				 next:false,
			     tipsText: '',
			     btnText: '获取验证码',
			     message: '',
			     count:'',
			     timer: null,
			     show: true
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