import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import countries from '../assets/country-list.json'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        city: {
            id: '',
            name: '',
            country: ''
        },
        cityCurrent: {
            temp: '',
            humidity: '',
            wind: '',
            imgSrc: '',
            description: ''
        },
        cityDaily: [],
        countries
    },
    actions: {
        async setItem(context, value) {
            const data = 
            {
                id: value.id,
                name: value.name,
                country: value.country
            }
            context.commit('setItem', data)
        },
        async getCurrentData(context, value) {
            if (value.name != '')
            {
                let url = ''
                if (value.id != '')
                    url = 'https://api.openweathermap.org/data/2.5/weather?id=' + value.id + '&lang=ru&units=metric&appid=f6989102ad0d7e53408f6a7e55c78e41'
                else
                    url = 'https://api.openweathermap.org/data/2.5/weather?q=' + value.name + '&lang=ru&units=metric&appid=f6989102ad0d7e53408f6a7e55c78e41'
                
                var dataList = []
                try
                {
                    await axios
                        .get(url)
                        .then(response => {
                            dataList = response.data
                        })
                        .catch(response => {
                            dataList = response.data
                        })
                    context.commit('getCurrentData', dataList)
                }
                catch
                {                      
                    context.commit('notFoundCurrentData')
                }
            }
        },
        async getDailyData(context, value) {
            if (value.name != '')
            {
                let url = ''
                if (value.id != '')
                    url = 'https://api.openweathermap.org/data/2.5/forecast?id=' + value.id + '&lang=ru&units=metric&appid=f6989102ad0d7e53408f6a7e55c78e41'
                else
                    url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + value.name + '&lang=ru&units=metric&appid=f6989102ad0d7e53408f6a7e55c78e41'
                var dataList = []
                try
                {
                    await axios
                        .get(url)
                        .then(response => {
                            dataList = response.data
                        })
                        .catch(response => {
                            dataList = response.data
                        })
                    context.commit('getDailyData', dataList)
                }
                catch
                {                      
                    context.commit('notFoundDailyData')
                }
            }
        }
    },
    mutations: {
        setItem(state, value) {
            state.city = 
            {
                id: value.id,
                name: value.name,
                country: value.country
            },
            state.countries.forEach(element => {
                if(element.code == state.city.country)
                    state.city.country = element.name
            })
        },
        getCurrentData(state, dataList) {
            state.city = 
            {
                id: dataList.id,
                name: dataList.name,
                country: dataList.sys.country
            },
            state.cityCurrent =  
            {
                temp: Math.round(dataList.main.temp),
                humidity: dataList.main.humidity,
                description: dataList.weather[0].description,
                wind: dataList.wind.speed,
                imgSrc: dataList.weather[0].icon
            },
            state.countries.forEach(element => {
                if(element.code == state.city.country)
                    state.city.country = element.name
            })
        },
        notFoundCurrentData(state) {
            state.city = 
            {
                id: '',
                name: '',
                country: ''
            }
            state.cityCurrent = {
                temp: "",
                humidity: "",
                description: "",
                wind: "",
                imgSrc: ""
            }
        },
        getDailyData(state, dataList) {
            state.city = 
            {
                id: dataList.city.id,
                name: dataList.city.name,
                country: dataList.city.country
            }
            state.cityDaily =  dataList,
            state.countries.forEach(element => {
                if(element.code == state.city.country)
                    state.city.country = element.name
            });
        },
        notFoundDailyData(state) {
            state.cityDaily = []
        }
    }    
})