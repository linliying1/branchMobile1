<template>
	<div class="selection-component" :class="{'grayBorder':!init}">
		<div class="selection-show" @click="toggleDrop">
			
			<span :class="{'gray':init}">{{init?'请选择':selections[nowIndex].name}}</span>
			<div class="rightRig" >
				<div class="arrow"></div>
			</div>
		</div>
		<div class="selection-list" v-if="isDrop">
			<ul>
				<li v-for="(item,index) in selections" @click="choseSelection(index)">{{item.name}}</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			selections: {
				type :Array,
				default: [{
					name: '省会',
					value:0
				}]
			}
		},
		watch:{
			selections(){
				console.log(this.selections[this.nowIndex].name+"改变了")
				this.init = true
				 
			}
		},
				
				
		
		data(){
			return{
				init:true,
				isDrop:false,
				nowIndex:0
			}
		},
	
		methods: {
			toggleDrop(){
				this.isDrop = !this.isDrop
//				this.init = true
			},
			choseSelection(index){
				this.nowIndex = index
				this.isDrop = false
				this.init = false
				this.$emit('on-change',this.selections[this.nowIndex])
				console.log(this.selections[this.nowIndex].name)
			}
			
		}
	}
</script>

<style scoped>
	.gray{
		color:rgb(153,153,153) !important;
	}
	.grayBorder{
		border:  1px solid #ccc !important;/*px*/
	}
	
	
	
	.selection-component{
		position: relative;
		display: inline-block;
        border-radius: 5px;
		background: #FFFFFF;
		border: 1px solid #ccc;/*px*/
		text-indent: 20px;
		width: 34%;
		/*margin-left: 10px;*/
		/*z-index: 1000;*/
	}
	
	.selection-show{
		border: 1px solid #e3e3e3;
		/*padding:0 10px 0 0px;*/
		text-align: left;
		display: inline-block;
		
		cursor: pointer;
		width: 98%;
		margin-left: -20px;
		height: 82px;
		line-height: 25px;
		border-radius: 3px;
		/*background: green;*/
		
	}
	.selection-show span{
		position:relative;
		left: -28px;
		display: inline-block;
		width: 73%;
		height: 78px;
		/*background: green;*/
		overflow-x: hidden;
		white-space: nowrap;
		/*text-overflow: ellipsis;*/
	}
		.selection-show .arrow{
			display: inline-block;
			border-left: 14px solid transparent;
			border-right: 14px solid transparent;
			border-top: 15px solid #8c8c8c;
			width: 0;
			height: 0;
			/*text-align: right;*/
			/*float: right;*/
			margin-top: -1px;
			margin-left: 36px;
			/*margin-right:40px;*/
			vertical-align: middle;
			position: absolute;
			top: 34px;
			right: 20px;
			
		}
		.selection-list{
			
			display: inline-block;
			position: absolute;
			left: 0;
			top: 78px;
			width: 100%;
			max-height: 456px;
			overflow: scroll;
			overflow-y:scroll;
			background: #FFFFFF;
			border-top: 1px solid #E3E3E3;
			border-bottom: 2px solid #E3E3E3;/*px*/
			box-shadow: 1px 4px 15px #CCCCCC;
			z-index: 5;
			
		}
	.selection-list li{
		padding: 5px 15px 5px 0px;
		border-left: 1px solid #E3E3E3;
		border-right: 1px solid #E3E3E3;
		cursor: pointer;
		background: #FFFFFF;
		height: 76px;
		line-height: 76px;
		text-align: left;
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 30px;
		color: rgb(51,51,51);
		list-style: none;
	}
	
	.selection-list li:hover{
		background: #0093E5;
	}
.rightRig{
	background: #f6f6f6;
	height: 81px;
	width: 70px;
	position: absolute;
	right: 2px;
	top: 2px;
	/*linear-gradient(to right,red,yellow,red)*/
	border-left:1px solid  #c9c9c9;/*px*/
}
.rightRig::after{ 
	background: linear-gradient(red,blue);
	content: '';
	z-index: -1;
	
	
}
</style>