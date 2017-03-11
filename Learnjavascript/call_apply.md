###call and apply important
   ####共同点：将当前的obj绑定到thisObj，这时候thisObj具备obj的属性方法。（thisObj继承obj属性和方法）绑定后会立即执行；
    
   ####不同点：apply接受的参数是：数组，call接受的是连续参数；
    
    obj.call(this.Obj,arg1,arg2,...);
    obj.apply(this.obj,arg1,arg2,..);
    
    function add(i,j){
        return i+j;
     }
     function sub(i,j){
        return i-j;
     }
    
    add(3,2);//5
    add.call(add,3,2);//因为add只有两个参数，绑定的数据只有前面两个；结果为5
    add.apply(add,[3,2]);//同上，参数以数组的形式传递；结果为5
    
    sub(3,2);//1
    sub.call(sub,3,2);//1
    sub.apply(sub,[3,2]);//1
    
    
   ####通过使用call和apply来实现对象继承
        var foo=function(){
            this.name="maroon";
            this.age=22;
        }
        var child={};//定义一个空对象
        console.log(child);//结果为{},一个空对象
        foo.call(child);//通过call将foo属性继承给child；
        console.log(child);
   
   ##### bind使用：
        bind绑定后不会立即执行；同样是add(),sub();
        add.bind(sub,5,3);
        sub.bind(add,5,3)();//返回8；  