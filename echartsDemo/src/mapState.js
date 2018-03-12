import {mapState} from 'vuex'

export default {
    computed: mapState({
        count: state => state.count,

        // 传递字符串参数count等同于state => state.count
        countAlias: 'count',

        // 为了能够使用this获取局部zhaungti,必须使用常规函数
        countPlusLocalState (state) {
            return state.count + this.localCount
        }
    })
}