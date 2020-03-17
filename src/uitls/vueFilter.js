import Vue from 'vue'
import filters from '../utils/filter'
// 年，月，天，季的单位转换
Vue.filter('cardNameType', filters.cardNameType)
//  时间格式转换
Vue.filter('timeFormat', filters.timeFormat)
