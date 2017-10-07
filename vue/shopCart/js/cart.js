'use strict'
var vm = new Vue({
    el: '#app',
    data: {
        productList: [],
        totalMoney: 0
    },
    filters: {
        formatMoney(value, type) {
            return '$ '+ value.toFixed(2) + type
        }
    },
    mounted : function() {
        this.$nextTick(function() {
            vm.cartView()
        })
    },
    methods: {
        cartView: function() {
            var _this = this
            vm.$http.get('data/cartData.json', {'id':123}).then(function(res) {
                _this.productList = res.data.result.list
                _this.totalMoney = res.data.result.totalMoney
            })
        },
        changeQuantity: function(item, type) {
            if(type == 1) {
                item.productQuantity++
            } else {
                if(item.productQuantity < 1) {
                    item.productQuantity = 1
                } else {
                    item.productQuantity--
                }
            }
        },
        checkedProduct(item) {
            if(typeof item.checked == undefined) {
                Vue.set(item, 'checked', true)
            } else if(item.checked) {
                Vue.set(item, 'checked', false)
            } else {
                Vue.set(item, 'checked', true)
            }
        }
    }
})