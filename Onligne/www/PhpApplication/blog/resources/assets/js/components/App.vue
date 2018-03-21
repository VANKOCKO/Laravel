<template>
    <div>
        <h1></h1>

        <p>
             <router-link :to="{ name: 'chart' }">chart</router-link> 
        </p>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {}
</script>