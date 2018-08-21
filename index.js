const {observable, computed, decorate, autorun} = mobx;
class MyStore {
    constructor () {
        this.username = 'unknow';
        this.address = 'jakarta';
    }
} 

decorate(MyStore, { data: observable });
const myStore = new MyStore(); 

autorun(()=> {
    console.log(myStore.username);
    console.log(myStore.address);
});