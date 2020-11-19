<template>
    <div class="main">
        <router-view></router-view>
        <TabBar v-if='route.meta.ShowTab'></TabBar>
    </div>

</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import {useRoute} from 'vue-router'

export default {
    name: 'App',
    data() {
        return {}
    },
    components: {
        TabBar,
    },
    setup() {
        const route = useRoute()
        return {
            route
        }
    },
    methods: {}
}
</script>

<!--//css只在当前组件起作用 在style标签中写入scoped-->
<style>
.main{
    margin: 0;
    padding: 0;
}
</style>
