/**
 * Created by Administrator on 2017/9/18.
 */

// EventEmitter事件方法
/*
* addListener('事件名称', 回调函数)
*   但是一般情况下,我们是不用这个的,而是使用on来绑定时间
*
* on('事件名称', 回调函数)
*   因为这个方法比较方便,所以一般使用此方法为指定时间添加监听器, 效果与addListener完全等价
*
* once(event, callBack)
*   用于注册单次执行事件
*
* e.removeListener()
*   移除事件监听
*
* e.removeAllListeners()
*   移除所有的事件监听
*
* 注意,我们可以为同一个事件名称绑定多个相同的监听器
* 但是监听器默认是最高为十次绑定相同监听器的
* 我们可以使用方法来设置最大的绑定相同监听器的数量
*
* e.setMaxListeners()
*   设置最多的相同监听器数量
*   如果参数为0, 则不限制此相同事件监听的数量
*   设置应在绑定事件之前,否则是无法生效的
*
* */

var em = require('events').EventEmitter
var e = new em()

// e.on('shadiao', function(aw){
//     console.log(`你触发了shadiao事件,于是${aw}就失踪了`)
// })

var callBack = function(aw){
    console.log(`你触发了shadiao事件,于是${aw}就失踪了`)
}

// e.on('shadiao', callBack)

// 我们绑定不同的事件时,是不存在此问题的
for(var i=0; i < 20; i++) {
    e.on(`shadiao${i}`, callBack)
}

for(var i=0; i < 20; i++) {
    e.emit(`shadiao${i}`, 'zhangsan')
}



// 移除监听器
/*
* 需要注意的是,当我们对事件进行移除时,需要将之前的事件命名好,才能够进行事件的移除, 不然的话是移除不掉的
* 同时,回调就没办法传参了,不然会出问题, 回调的参数就需要在emit调用的时候传参了
* */
// e.removeListener('shadiao', callBack)

// e.emit('shadiao', '张三')











