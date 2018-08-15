<template>
    <div class="v-header">
        {{title}}
    </div>
</template>
<script>
    export default {
        name: 'vHeader',
        data: function () {
            return {
                title: 'this is header'
            }
        },
    }
</script>
<style  lang="less" rel="stylesheet/less">
    .v-header {
        height: 30px;
        border-bottom: 1px solid #d5d5d5;
        line-height: 30px;
    }
</style>