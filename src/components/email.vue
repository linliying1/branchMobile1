<template>
	<div id="emailWrap">
  		<p>使用您注册的邮箱找回</p>
  		<p><input type="email" v-model="inputEmail" placeholder="请输入邮箱" /></p>
  		<btn style="background: #b3b3b3;margin-top: 0px;" :class="{'nextBlue':next}" :handleText='content' @btnClick1="submitEmail()"></btn>
  		<div class="notice">员工账号重置需联系店主在商户管理管理里面重置</div>
  		<div id="dialogWrap" v-if="dialogShow">
  			<div id="black"></div>
  			<div id="dialog">
  				<p>您登陆的邮箱是{{inputEmail}},是否通过此邮件重置找回密码？</p>
  				<div>
  					<span @click="dialogShow=false">取消</span>
  					<span>确认</span>
  				</div>
  			</div>
  		</div>
  	</div>
</template>

<script>
import Btn from './btn'
	export default{

		components: {
			Btn
		},
		watch: {
			inputEmail(){
				if((this.reg).test(this.inputEmail)){
					this.next = true
				}else{
					this.next = false
				}
			}
		},
		data(){
			return{
				reg:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]{2,5})+/,

				dialogShow:false,
				inputEmail:'',
				content:'确定发送邮件',
				next:false
			}
		},
		methods: {
			submitEmail(){
				if(this.next){
					this.dialogShow = true
				}
				
			}
			
		}
	}
</script>

<style scoped>
	  #dialogWrap {
	  	
	  	width: 100%;
	  }
    #dialogWrap #black{
    	position: absolute;
    	top: 0;
    	width: 100%;
    	height: 100%;
    	z-index: 10;
    	left: 0;
    	background:rgba(0,0,0,0.5);
    }
    #dialog{
    	background: #FFFFFF;
    	position: absolute;
    	top: 40%;
    	left: 50%;
    	border-radius:10px ;
    	z-index: 50;
    	width: 544px;
    	height: 238px;
    	margin-left: -272px;
    	margin-top: -119px;
    	text-align: center;
    	
    }
    #dialog p{
    	color: #333333;
    	font-size: 30px;
    	padding:0 20px;
    	line-height:46px;
    }
     #dialog div{
     	border-top: 1px solid  #b2b2b2;/*px*/
     }
     
     #dialog span{
     	display: inline-block;
     	width: 48%;
     	line-height: 88px;
     	color: #157efb;
     	font-size:34px ;
     }
     #dialog span:nth-of-type(1){
     	border-right: 1px solid  #b2b2b2;/*px*/
     }
    
    
	.nextBlue{
		background:#0093e5 !important;
	}
	#emailWrap{
		
		padding-top: 10px;
	}
	#emailWrap p:nth-of-type(1){
		margin: 32px 0;
		font-size: 26px;
		color: rgb(51,51,51);
	}
	#emailWrap p:nth-of-type(2) input{
		width: 100%;
		margin-bottom: 90px;
	}
</style>