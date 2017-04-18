# 使用javascript创建react元素
1. react对象第一个方法：createElement()的方法，一共三个参数：type,props,children;
    1. type:必须是一个字符串或者reactClass;
            字符串必须是html标签
            reactClass是React.createClass()创建的；
    2. props:是javascript对象，会从父元素传递到子元素，有些不可变得属性；
    3. children：可以是ReactElement,或者ReactNode;reactText;
2. React渲染：
    1. ReactDOM.render(ReactElement,DomElement,callback);
         1. ReactElement：已经创建的ReactNode🌲的根结点；
         2. DomElement:是容器DOM节点；
3. 创建组建：
    1. 首先定义 react类：调用React.createClass()定义一个规范对象作为参数；
    2. 创建组建元素：调用React.createElement(),将定义的react类作为type参数；
    3. 创建组件：调用ReactDOM.render(),将组件元素作为参数；
4. 


