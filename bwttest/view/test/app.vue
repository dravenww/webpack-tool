<template>
    <div class="container">
        <vheader></vheader>
        <div>
            {{name}}www{{value}}
        </div>
    </div>
</template>

<script>
    import vHeader from 'widget/test/vheader.vue'
    import util from '@/util/index';
    import uu from './util';
    export default {
        data: function () {
            return {
                name: util.getTitle(),
                value: uu.speak()
            }
        },
        created: function () {

            console.log(22123422222);
        },
        components: {
            vheader: vHeader
        }
    }
</script>
<style lang="sass" rel="stylesheet/sass"></style>