// 冒泡排序
function CArray(numElements) {
    this.dataStore=[];
    this.pos=0;
    this.numElements=numElements;
    this.insert=insert;
    this.toString=toString;
    this.clear=clear;
    this.setData=setData;
    this.swap=swap;
    this.bubbleSort=bubbleSort;
    for(var i=0;i<numElements;++i){
        this.dataStore[i]=i;
    }
}

function setData() {
    for(var i=0;i<this.numElements;i++){
        this.dataStore[i]=Math.floor(Math.random()*(this.numElements));
    }
}

function clear() {
    for(var i=0;i<this.dataStore.length;++i){
        this.dataStore[i]=0;
    }
}

function insert(element) {
    this.dataStore[this.pos++]=element;
}

function toString() {
    var restr=" ";
    for(var i=0;i<this.dataStore.length;++i) {
        restr +=this.dataStore[i]+" ";
        if(i>0 && i%10==0){
            restr+="\n";
        }
    }
    return restr;
}

function swap(arr,index1,index2) {
    var temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}
function bubbleSort() {
    var numElements=this.dataStore.length;
    for(var outer=numElements;outer>=2;--outer){
        for(var inner=0;inner<=outer-1;++inner){
            if(this.dataStore[inner]>this.dataStore[inner+1]){
                swap(this.dataStore,inner,inner+1);
            }
        }
        console.log(this.toString());
    }
}

var numElements=10;
var mynums=new CArray(numElements);

mynums.setData();
console.log(mynums.toString());

mynums.bubbleSort();
console.log(mynums);
