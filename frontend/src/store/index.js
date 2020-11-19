import { createStore } from 'vuex'
// const moduleA = {
//
// }
//
// export default Vuex.useStore({
//   modules:{
//     a:moduleA
//   }
// })

export default createStore({

    state: {
        name:"test",
        test:{
            a:"this is store data",
            name:"cze"
        },
        demo:[
            {id:1,content:"123",ifChoose:true},
            {id:2,content:"two",ifChoose:false},
        ],
        routeDemo:'/tuwen'
    },

    //mutation必须是同步函数
    //更改vuex的store中的状态的唯一方法是提交mutation。vuex中的mutation非常类似于时间：每个mutation都有一个字符串事件类型和一个回调函数。这个回调函数
    //就是我们时间进行状态更改的地方。并且他会接受state作为第一个参数
    mutations: {
        changeRoute(state,val){
            state.routeDemo = val
        },
        changeTest(state){
            state.name = 'cze';
        },
        setTestA(state,value){
            state.test.a = value
        },
        //可以向store.commit传入额外的参数。
        //store.commit('setDemo',"hah")
        //大多数情况下。载荷应该是一个对象。这样可以包含多个字段并且记录的mutation会更易读。
        setDemo(state,value){
            state.demo.content = value
        },
        increment(state,val){
            console.log(val)
        },
        //  store.commit('increment',{count:10})

        // [SOME_MUTATION](state){
        // //  使用常量替代mutation事件类型在各种Flux实现
        // }
    },

//就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
    //Getter 会暴露store.getters对象。你可以以属性的形式访问这些值
    getters:{
        name:(state) => state.name,
        getTest:state => {
            return state.test.a
        },
        getBool:state => state.demo.filter(d=>d.ifChoose),
        toGet:(state,getters) => {
            return getters.list.length
        }
    },

    //Action提交的是mutation，而不是直接变更状态
    //Action可以包含任意异步操作
    //Action函数接受一个与store实例具有相同方法和属性的context对象。
    actions: {
        increment(context){

            context.commit("increment")
            return new Promise((res,rej)=>{
                setTimeout(()=>{
                    context.commit("increment")
                },1000)
                console.log(rej)
                res();
            })
        },
        actionDemo({commit}){
            commit('increment')
        }
    },

    modules: {

    }
});
