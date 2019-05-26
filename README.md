# webpack React demo


### react context

> 不必向组建中层层传递props   context就是全局变量类似的性质

> 语法稍微麻烦   影响了组件的重复可用性（独立组件不要用，有业务关联的子组件适用）


**api**
```javascript
// 官方示例
const MyContext = React.createContext(defaultValue);

<MyContext.Provider value={/* some value */}>

<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>

```

