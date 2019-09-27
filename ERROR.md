# Wrong topic set

## 1、Please, don't use direct commit's, use dispatch instead of this.

> 在Electron-vue项目中进行vuex的commit、dispatch操作报错的解决方法

错误原因：因为electron-vue脚手架引入了vuex-electron插件导致的；

插件作用：用于多进程间共享 Vuex Store 的状态；

[vue-electron文档](https://github.com/vue-electron/vuex-electron)

在文档中标明了

> In case if you enabled createSharedMutations() plugin you need to create an instance of store in the main process. To do it just add this line into your main process (for example src/main.js):

> 简单的说就是，如果你启动了 createSharedMutations()插件，你就需要在主进程中添加下面👇一行代码；
```js
import './path/to/your/store'
```
[主进程](src/main/index.js)

注意：electron项目中如果你使用了vuex-electron的插件，请在render渲染进程中调用dispatch或mapActions。不要使用commit，因为通过commit触发的操作不会在进程之间共享，所以electron-vue项目中，尽量不要在组件里或其他渲染进程文件里直接commit提交修改请求到mutations。

PS：如果项目没有多进程交互的需求，可以直接不引入这个插件