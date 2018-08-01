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
				<input type="text" />
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
				<input type="text" />
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>用户名:</span>
				<input type="text" />
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>密码:</span>
		 		<input type="password" v-model="password1" />
			</div>
		
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>重复密码:</span>
				<input :class="{'redBoeder':unPass}" type="password" v-model.lazy="password2" />
				
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
				<input type="text" />
				<div class="rightDiv">获取验证码</div>
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>验证码:</span>
				<input type="text" />
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>电子邮箱:</span>
				<input type="text" />
			</div>
			<div class="item">
				<img src="../assets/login/mandatory.png" />
				<span>详细地址:</span>
				<input type="text" />
			</div>
			<div class="item" id="location">
				<img src="../assets/login/mandatory.png" />
				<span>地图坐标:</span>
				<input type="text" />
				<div class="rightDiv"><a style="color: #FFFFFF;text-decoration: none;" href="https://lbs.amap.com/console/show/picker">拾取</a></div>
				
			</div>
			<Btn :handleText="content" @btnClick1='toRegister' ></Btn>
		</div>
	</div>
</template>

<script>
import Btn from './btn'
import VSelection from './selection'
import { province, city} from '@/assets/vue-area.js'
import { type, typeDetail} from '@/assets/type.js'

	export default{
		  watch: {
		    selected: function () {	
		      this.cityL = city.filter((item) => item.parentId === this.selected.code)
//		      this.citySelected.name = '请选择'
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
			toRegister(){
				
				if(this.password1!=this.password2){
					this.unPass = true,
					this.password1 =this.password2=''
					
				}else{
					this.unPass = false,
					console.log('点击注册')
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
				password1: '',
				password2: '',
				unPass:false,
				
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
	.redBoeder{
		border-color:#f0232c !important;
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