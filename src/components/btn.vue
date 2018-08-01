<template>
	<div id="loginBtn" @click="btnClick()">
  			{{handleText}}	
  	</div>
</template>

<script>
	export default{
		props:{
			handleText: {
				type: String,
				default: ''
			}
		},
		methods: {
			btnClick(){
//				console.log(14)
				this.$emit('btnClick1')
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	#loginBtn{
		
		height: 85px;
		background: #0093e5;
		border-radius: 10px;
		color: #FFFFFF;
		text-align: center;
		line-height: 85px;
		font-size:36px ;
		width: 100%;
		-moz-box-sizing: border-box; /*Firefox3.5+*/
			-webkit-box-sizing: border-box; /*Safari3.2+*/
			-o-box-sizing: border-box; /*Opera9.6*/
			-ms-box-sizing: border-box; /*IE8*/
			box-sizing: border-box !important;
	}
</style>