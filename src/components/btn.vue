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
	}
</style>