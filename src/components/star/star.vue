<template>
  <div class='star' :class='starType'>
    <span v-for='item in itemClasses' :class='item' class='star-item'></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const Length = 5
  const On = 'on'
  const Off = 'off'
  const Half = 'half'
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size
      },
      itemClasses() {
        let result = []
        let score = Math.floor(this.score * 2) / 2
        let hasDecimal = score % 1 !== 0
        let integer = Math.floor(score)
        for (var i = 0; i < integer; i++) {
          result.push(On)
        }
        if (hasDecimal) {
          result.push(Half)
        }
        while (result.length < Length) {
          result.push(Off)
        }
        return result
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import "../../common/stylus/mixin.styl"
  .star
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        width: 20px
        height: 20px
        -webkit-background-size: 22px
        background-size: 22px
        margin-right: 22px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        -webkit-background-size: 15px
        background-size: 15px
        margin-right: 6px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        -webkit-background-size: 10px
        background-size: 10px
        margin-right: 3px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')

</style>
