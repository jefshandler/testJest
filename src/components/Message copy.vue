<template>
<nav>
  <a id="home">Home</a>
  <a v-if="isLoggedIn" id="profile">My Profile</a>
</nav>
</template>

<script>
export default {
  
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Message',
  data(){
    return {
      isLoggedIn: false
    }
  }
};
</script>
