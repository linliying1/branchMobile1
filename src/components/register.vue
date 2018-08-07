<template>
	<div id="registerWrap">
		<div class="bar">
				<a href="/"><img src="../assets/login/back.png" /></a>
				<span>商户注册</span>
		</div>
		<div class="regisConten">
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>商户名称:</span>
				<input @blur="check" type="text" />
			</div>
			<div class="item">
				<img style="position: relative;top: -14px;" src="../assets/login/mandatory.png" />
				<span style="position: relative;top: -14px;">商户类型:</span>
				<v-selection style="position: relative;left: -6px;" v-model="typeSelected" autofocus v-if="typeL" :selections="typeL" @on-change="onTypechange($event)"></v-selection>
				 <v-selection v-model="typeDetailSelected" autofocus v-if="typeDetailL" :selections="typeDetailL" @on-change="onTypeDetailLchange($event)"></v-selection>
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>法人代表:</span>
				<input id="faren" maxlength="20"  @blur="check" type="text" />
			
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>用户名:</span>
				<input @blur="check" placeholder="6-16个字符之间" type="text" maxlength="20" />
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>密码:</span>
		 		<input @blur="check" placeholder="6-16个字符之间" type="password" v-model="password1" maxlength="20" />
			</div>
		
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>重复密码:</span>
				<input maxlength="20" placeholder="6-16个字符之间" @blur="check" :class="{'redBorder':unPass}" type="password" v-model.lazy="password2" />
				
			</div>
			<div v-if="unPass" class="tips">
	  				<span>两次输入的密码不一致</span>
	  			
	  		</div>
			<div class="item">
				<img style="position: relative;top: -14px;" src="../assets/login/mandatory.png" />
				<span style="position: relative;top: -14px;">所在区域:</span>
				<v-selection style="position: relative;left: -6px;" v-model="selected" autofocus v-if="provinceL" :selections="provinceL" @on-change="onProvincechange($event)"></v-selection>
   				<v-selection v-model="citySelected" autofocus v-if="cityL" :selections="cityL" @on-change="onCitychange($event)"></v-selection>
			</div>
			<div class="item">
				<span>电话号码:</span>
				<input type="text" />
			</div>
			<div class="item" id="phone">
				<img src="../assets/login/mandatory.png" />
				<span>手机号码:</span>
				<input maxlength="11" @blur="check" type="text" />
				<div class="rightDiv" :class="{'blueBac':canGetCode}">获取验证码</div>
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>验证码:</span>
				<input  maxlength="4" @blur="check" type="text" />
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>电子邮箱:</span>
				<input maxlength="20" @blur="check" type="email" />
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>详细地址:</span>
				<input @blur="check" type="text" />
			</div>
			<div class="item" id="location">
				<img src="../assets/login/mandatory.png" />
				<span>地图坐标:</span>
				<input @blur="check" type="text" />
				<div class="rightDiv"><a style="color: #FFFFFF;text-decoration: none;" target="_blank" href="https://lbs.amap.com/console/show/picker">拾取</a></div>
				
			</div>
			<div v-if="allShouldFilled" class="tips">
	  				<span>请确保数据合法性及必填信息已填写！</span>
	  			
	  		</div>
			<Btn :handleText="content" @btnClick1='toRegister' ></Btn>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import Btn from './btn'
import VSelection from './selection'
import { province, city} from '@/assets/vue-area.js'
import { type, typeDetail} from '@/assets/type.js'

	export default{
		  watch: {
		    selected: function () {	
		      this.cityL = city.filter((item) => item.parentId === this.selected.code)
               console.log('selectPro:'+this.selected.name)
		      console.log('citySelected:'+this.citySelected.name)
		    },
		    typeSelected(){
		    	this.typeDetailL = typeDetail.filter((item) => item.parentId === this.typeSelected.code)
		    }

		  },
		components: {
			Btn,
			VSelection
		},
		
		 created() {
				
		      this.provinceL = [...province]
		      this.typeL = [...type]
		 },
		methods: {
			check(){
//				当输入框有数据时且合法时，将边框颜色变成正常，移除未填写类名onerror
				for(let i=0;i<$('.item input').length;i++){
					
					if($('.item input').eq(i).val()!=''){
						
						if(i==2||i==3||i==4){
						if (/^\w{6,16}$/.test($('.item input').eq(i).val())) {
							$('.item input').eq(i).css('border-color','#ccc').removeClass('onError') ;
							//长度是否在6-16之间
						}
					}else if(i==6){
						if(/^1\d{10}$/.test($('.item input').eq(6).val()) ){
							$('.item input').eq(i).css('border-color','#ccc').removeClass('onError');
							//电话合法时发送验证码按钮颜色变蓝色
							this.canGetCode = true;
						}
					}else if(i==8){
						if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]{2,5})+/.test($('.item input').eq(8).val())){
							$('.item input').eq(8).css('border-color','#ccc').removeClass('onError');
							//邮箱
						}
					}else{
							$('.item input').eq(i).css('border-color','#ccc').removeClass('onError') ;
					}
						
					
					}
					
					
				}
			
			},
			toRegister(){
				 this.$router.push({
          		 path: '/otherPages'
          	 });
				if(this.password1!=this.password2){
					this.unPass = true,
					this.password1 = this.password2=''
					
				}else{
					this.unPass = false
					
//					提交前检测所有input是否都有数据，将未填写的添加addClass('onError')类名
					for(let i=0;i<$('.item input').length;i++){
						
						if($('.item input').eq(i).val()==''){
							if(i!=5){
								$('.item input').eq(i).css('border-color','red').addClass('onError');
							}
						}

					if(i==2||i==3||i==4){
						if (!/^\w{6,16}$/.test($('.item input').eq(i).val())) {
							$('.item input').eq(i).css('border-color','red').addClass('onError');
							console.log(i+'不合法')
						}
					
					}
					if(i==6){
						if(!/^1\d{10}$/.test($('.item input').eq(6).val()) ){
							$('.item input').eq(i).css('border-color','red').addClass('onError');
							
							console.log('手机号不合法')
						}
					}
					if(i==8){
						if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]{2,5})+/.test($('.item input').eq(8).val())){
							$('.item input').eq(8).css('border-color','red').addClass('onError');
						}
					}
						
					
					}
//					提交前检测所有selections是否都有数据
					for(let i=0;i<$('.selection-component').length;i++){
						console.log($('.selection-component .selection-show span').eq(i).html());
						
						if($('.selection-component .selection-show span').eq(i).html()=='请选择'){
							$('.selection-component .selection-show span').eq(i).parent().parent().css('border-color','red').addClass('onError');
							this.allShouldFilled = true;
						}else{
							$('.selection-component .selection-show span').eq(i).parent().parent().css('border-color','#ccc')
						}
					}
					
					//统计未填写类名的数目，为0则全部填写
					this.numError = $(".item .onError").length;
					console.log(this.numError+"error数目")
					if(this.numError==0){
//						this.allShouldFilled = false;
						$('.tips span').html('注册成功，即将跳转到登录页面……').css('color','green')
						console.log('已经全部填写')
					}else{
						this.allShouldFilled = true;
					}
				}
			},
			onProvincechange(data){
				this.selected = data;
				console.log(this.selected.name)
			},
			onCitychange(data){
				this.citySelected = data;
				console.log(this.citySelected.name)
			},
			onTypechange(data){
				this.typeSelected = data;
			},
			onTypeDetailLchange(data){
				this.typeDetailSelected = data;
			}
		},
		
		data(){
			return {
				numError: 0,
				password1: '',
				password2: '',
				unPass:false,
				allShouldFilled:false,
				canGetCode: false,
				
				content:'立即注册',			
				selected: { },
			    citySelected: {},
			    provinceL: [],
			    cityL: [],
			    
			    typeSelected: { },
			    typeDetailSelected: {},
			    typeL: [],
			    typeDetailL: [],
			    
			     
			}
		}
	}
</script>

<style>
	.redBorder{
		border-color:#f0232c !important;
	}
	.blueBac{
		background: #0093E5 !important;
		color: #FFFFFF !important;
	}
	.bar{
		background: rgb(0,147,229);
		height: 88px;
		width: 100%;
		line-height: 88px;
		text-align: center;
	}
	.bar img{
		width:30px ;
		height:40px ;
		float: left;
		margin-left: 30px;
		margin-top: 20px;
	}
	.bar span{
		color: #FFFFFF;
		margin-left: -30px;
		vertical-align: top;
		font-size: 36px;
	}

.regisConten{
	padding: 34px 30px 100px 30px;
	/*padding-top:34px ;*/
}
.regisConten .item{
	/*background: pink;*/
	margin-bottom: 50px;
	width: 100%;
	height: 78px;
	text-align: right;
}
.regisConten .item img{
	width: 12px;
	height: 12px;
	margin-right: 7px;
}
.regisConten .item span{
	font-size: 30px;
	color: #333333;
	line-height: 78px;
	margin-right: 34px;
}
.regisConten .item input{
	width:71%;

}
input{
		height: 80px;
		border-radius: 5px;
		background: #FFFFFF;
		border: 1px solid #ccc;/*px*/
		text-indent: 20px;
		outline: none;
	}
#location input{
	width: 51%;

}
.rightDiv{
	height:78px;
	font-size: 28px;
	margin-left:18px;
	text-align: center;
	line-height: 78px;
	border-radius: 6px;
	display: inline-block;
}
#location div{
	background: #0093E5;
	width:16% ;
	color: #FFFFFF;
	
}
#phone input{
	width: 42%;
}
#phone div{
	background: #e5e5e5;
	padding:0 18px ;
	color:#999999 ;
}

 .tips{
	margin-top: -46px;
	position: absolute;
	left: 31%;
}

.tips span{
	
	color: rgb(240,35,44);
}
</style>