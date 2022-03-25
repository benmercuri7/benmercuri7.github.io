<template>
  <div class="index-container">
    <router-link to="/file-val-signatures" class="index-save button">
      <span class="index-text">Start Demo</span>
    </router-link>
    <img
      alt="image"
      src="/playground_assets/core%20logo%203-200h.png"
      class="index-image"
    />
  </div>
</template>

<script>
export default {
  name: 'Index',
  metaInfo: {
    title: 'CORE DD',
    meta: [
      {
        property: 'og:title',
        content: 'CORE DD',
      },
    ],
  },
}
</script>

<style scoped>
.index-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  flex-direction: column;
}
.index-save {
  top: 506px;
  left: 0px;
  right: 0px;
  width: 151px;
  height: 30px;
  margin: auto;
  position: absolute;
  border-color: #615a9b;
  border-radius: 12px;
  text-decoration: none;
  background-color: #615a9b;
}
.index-text {
  top: 7px;
  left: 42px;
  color: #ffffff;
  margin: auto;
  position: absolute;
  font-size: 12px;
  text-align: left;
}
.index-image {
  top: 307px;
  left: 0px;
  right: 0px;
  width: 360px;
  height: 99px;
  margin: auto;
  position: absolute;
  object-fit: cover;
}
</style>
