<template>
  <div class="header">
    <LangSelect />
  </div>
</template>
<script>
import LangSelect from '@/components/tools/LangSelect'
export default {
    components: {
      LangSelect
    }

}
</script>
<style lang="less" scoped>
  .header{
     width: 100%;
     height: 58px;
     background: #000;
     opacity: 0.8;
  }
</style>
