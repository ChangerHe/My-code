/**
 * Created by Administrator on 2017/9/17.
 */

console.log(arguments.callee.toString())

var test1 = require('./test1')

test1.f()


/*
	在Nodejs中,每一个js可执行文件,就是一个闭包
	闭包中包含几个参数: 
		1. exports
			这是对第三个参数module.exports的引用, 因此当我们使用exports暴露另一个包的对应的属性和方法的时候,不能直接对其进行覆盖,否则就相当于对变量进行命名了

		2. require
			这是对依赖的引用的方法
			我们使用require('包名')  对包进行引用, 使用自定义包的时候需要加上 './'	其他的系统包及第三方包不需要
			在引入的时候,如果文件的后缀名为 '.js'  '.json'  '.node' 则文件的后缀名可以不写,它会按顺序查找
			在引入的时候,如果包不在当前文件夹中, 会一直往上查找包的依赖

		3. module
			这是模块的对象
			其参数有: 
				id  模块名
				exports 暴露的对象
				filename 模块的路径数组
				paths 查找模块的路径,溯源查找\
				children 子模块

	package.json的主要文件内容
		name 项目名
		version 版本号
		description 描述
		main 入口文件
		dependencies 依赖
		scripts 可执行命令

	npm的基本命令
					

*/