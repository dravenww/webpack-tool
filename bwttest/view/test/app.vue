<template>
    <div class="container">
        <vheader></vheader>
        <div>
            {{name}}
        </div>
    </div>
</template>

<script>
    import vHeader from 'widget/test/vheader.vue'
    import util from '@/util/index';
    export default {
        data: function () {
            return {
                name: util.getTitle()
            }
        },
        created: function () {
            console.log(2222222);
        },
        components: {
            vheader: vHeader
        }
    }
</script>
<style lang="sass" rel="stylesheet/sass"></style>