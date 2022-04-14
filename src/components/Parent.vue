<template>
    <div>
        Parent
        <Child />
    </div>
</template>

<script>
import Child from './Child.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Parent',
    components: {
        Child
    }
};
</script>