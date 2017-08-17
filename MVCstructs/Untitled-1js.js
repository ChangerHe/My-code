/* 
 * API速查表:(做完再更)
 * $('#id名):            查找id(也可使用$().getId('id名')但不推荐)
 * $('.className名'):    查找className(也可使用$().getClass('className名')但不推荐)
 * $().getClass('className名','查找范围')  查找某范围下的className,范围的定义方式为id则使用'#id'以此类推
 * $('tagName名'):       查找tagName(也可使用$().getTagName('tagName名')但不推荐)
 * $().getName('namg名') 查找name值,因为用得少,就没有进行进一步封装
 * 
 * .getElement(num)      获取相应标签上的相应子元素,如,getElement(1)则表示选取第二个子元素
 * .html(inner)          注入或查找元素内部值,inner 表示需要传入的内容,可以为一连串的标签,也可以是一些字符串,当不传值时,默认进行查找操作
 * .click(fn)            为元素绑定点击事件fn 表示一个函数,当点击后执行该函数
 * .css(attr, value)     为元素添加css属性attr表示css属性的属性名称,当然,如果是带中间连字符的属性,请使用驼峰命名法,value表示attr属性的相应的值
 * .addClass(str)        为元素增加className,其中str 表示需要增加的class名称
 * .removeClass(str)     为元素移除className,str 表示需要移除的class名称
 * .addRule(num, selectorText, cssText, position)   在外联样式表中添加相应的css属性,num表示第几个样式表,selectorText表示选择器名称,cssText表示css的样式名称,position表示要插入的位置   用法实例,: $().addRule(0, 'body', 'background:green', 0)(注意:为文档的样式添加样式会破坏css的结构,因此不建议使用,当使用的时候,务必小心.)
 * .removeRule(num, index) 移除非行内位置的css规则,num表示要移除的css外联式样式表的位置,第一个则num为0,index表示要移除的样式下标(注意:为文档的样式添加样式会破坏css的结构,因此不建议使用,当使用的时候,务必小心.)
 * .hover(over, out)    设置鼠标移入移出所执行的函数,over 传入一个函数,表示在鼠标移入时做什么,out 传入一个函数,表示在鼠标移除的时候做什么
 * .show()              设置为显示
 * .hide()              设置为隐藏
 * .center()            设置物体的居中,此方法建议与下方的resize配合使用,否则无法实现元素的实时居中.当然,前提是你已经设置了元素的position属性为absolute或fixed
 * .resize(fn)            触发浏览器窗口事件,窗口改变则执行函数.
 * .lock()              将该元素设置为锁屏遮罩,(不是特别建议使用,因为其实可以设置块级元素的position为fixed之后.设置上下左右位置都为0 就可以实现了)
 * .unlock()            移除锁屏遮罩
 * .drag()              为元素添加拖拽功能,如需实现拖拽,请将块级元素设置为position:absolute或fixed;
 * .addEvent(obj, type, fn)  为元素添加事件绑定,obj表示要添加事件的对象,type表示要添加的事件类型,fn表示该事件类型下要执行的相应函数
 * .find(str)           查找节点下的子节点,str表示查找节点下子节点的值,传入值前加'#'时表示查找ID,传入值前加'.'表示查找的是class,直接传入则表示查找tagName
 * .animate(attr, step, target, time) 设置动画效果,attr表示需要设置的属性,一般为left,top等等,step表示每个单位时间需要移动的步数,target表示目标,当我想移动到500的位置停下的时候,设置target为500,time表示单位时间,以毫秒为单位
 * .extend(name, fn)   给使用者提供一个接口,方便进行相应功能的增加,name表示插件的名称,方便后期进行调用,fn表示该插件所绑定的相应方法
 */