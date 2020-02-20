<template>
    <form class="form" @submit.prevent="submitEvent()">
		<input
			class="form__input"
			type="text"
			:placeholder="inputPlaceholder" 
			:class="{startViewInput: inputFocus}"
			v-model="inputValue"
			@input="inputEvent"
			@change="inputEvent"
			@focus="focusEvent"
			@blur="blurEvent"
		>
		<button 
			class="form__button"
			type="submit"
			:class="{startViewButton: inputFocus}"
			@click="submitEvent"
		><i class="fa fa-search"></i></button>        
        <ul class="suggestions" v-show="inputFocus || suggestHover">
            <li 
				class="suggest-item"
                v-for="item in items" 
                :key="item.id"
				@mouseover="suggestHover = true"
				@mouseout="suggestHover = false"
                @click="selectItem(item)"
            >{{ item.name }} ({{item.country}})</li>
        </ul>
	</form>
</template>
 
	
<script>
import jsonData from '../assets/city.list.min.json'
import { mapState, mapActions } from 'vuex'

export default {
        data() {
            return {
                items: [],
                cityList: jsonData,
                inputFocus: true,
                inputValue: "",
				inputPlaceholder: "Поиск...",
				suggestHover: false
            }        
		},
		computed: {
			...mapState(['city'])
		},
        methods: {
			...mapActions(['getCurrentData','setItem']),
            searchHover() {
                this.inputFocus = true
            },
            inputEvent(text) {                
                if(this.inputValue.length > 1)
                {
                    this.items = this.cityList.filter(t => t.name.toLowerCase().startsWith(this.inputValue.toLowerCase()))
                }
            },
            focusEvent() {
                this.inputFocus = true
            },
            blurEvent() {
                this.inputFocus = false
            },            
            keyupEvent() {
                if(event.keyCode == 13) {
                    this.submitEvent()
                }
            },
            selectItem(item) {
                this.getData(item)
            },
            submitEvent() {
                if (this.inputValue.length > 0)
                {		
					const item = 
					{
						id: '',
						name: this.inputValue,
						country: ''
					}
                    this.getData(item)
                }
			},
			getData(item) {
				this.getCurrentData({
					id: item.id,
					name: item.name,
					country: item.country
				})
				this.setItem({					
					id: item.id,
					name: item.name,
					country: item.country
				})
				this.inputPlaceholder = this.city.name.substr(0, 1).toUpperCase() + this.city.name.substr(1).toLowerCase()
				this.inputValue = ""
				this.items = []
				this.blurEvent()
				if (this.$route.path != '/weather/current')
					this.$router.push({ path: '/weather/current' })
			}
        }
    }
</script>

<style lang="scss" scoped>
    .form {
		max-width: 410px;
		position: relative;
        font-size: 18px;
        font-weight: 700;
        margin: 20px 0 20px 10px;
        width: auto;
        flex-grow: 1;
        text-align: right;
        @media (min-width: 425px) {
            font-size: 24px;
        }
		&__input {
			background: transparent;           
			padding: 10px 3px;
			margin: 0;
			border: 2px solid #ffffff;
			border-right: 0;
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
			outline: none;
			color: #ffffff;
			transition: 1s;
			width: 0;
			&::placeholder {
				color: #ccc;
			}
		}
		&__button {
			border: 2px solid #ffffff;
			outline: none;
			border-left: 0;
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
			background: transparent;
			transition: 0.2s;
			max-width: 46px;
			color: #ffffff;
			padding: 10px 14px 10px 8px;
			&:hover {
				color: #ccc;
				background: rgba(0,0,0,0.2)
			}
		}         
        &:hover, & input:focus {
            input {
                width: calc(100% - 52px);
                margin: 0;
                padding: 10px 20px;
            }
            button {
                padding-left: 14px;
                max-width: 52px;
            }
        }
	}
    .startViewInput {
		flex-grow: 1;
        width: calc(100% - 52px);
        padding-left: 20px;
        padding-right: 24px; 
    }
    .startViewButton {
		background: rgba(0,0,0,0.2);
        padding-left: 14px;
        max-width: 52px;
    }

	.suggestions {
		position: absolute;
		background: rgba(255,255,255,1);
		z-index: 1000;
		padding: 0;
		margin: 0;
		transition: all .3s;
		//transform: scaleY(0);
		transform-origin: top center;
		max-height: 400px;
		overflow-y: scroll;
		width: 100%;
		max-width: 500px;
	}
	.suggest-item {
		list-style: none;
		z-index: 1000;
		cursor: pointer;
		padding: 5px 20px;
		&:hover {
			background: #ccc;
		}
	}
	span {
		cursor: default; 
		padding: 0px 10px;
	}
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1; 
	}
	::-webkit-scrollbar-thumb {
		background: #aaa; 
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555; 
	}
  </style>