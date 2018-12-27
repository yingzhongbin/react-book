23.dangerouslySetHTML 和 style 属性
dangerouslySetInnerHTML={{__html: this.state.content}} 需要在闭合标签里<xxx />


static propTypes = {
  comment: PropTypes.object.isRequired,
}


组件的内容编写顺序如下：

1. static 开头的类属性，如 defaultProps、propTypes。
2. 构造函数，constructor。
3. getter/setter（还不了解的同学可以暂时忽略）。
4. 组件生命周期。
5._ 开头的私有方法。
6. 事件监听方法，handle*。
7. render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
8. render() 方法。

map设置的子组件的key最好用key={Math.random()}，不然删除的时候回出bug