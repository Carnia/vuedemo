<template>
  <div class="cartcontrol">
    <transition name='move'>
      <div class="cart-decrease icon-remove_circle_outline" v-show='food.count > 0' @click='decreaseCart'>
      </div>
    </transition>
    <div class="cart-count" v-show='food.count > 0'>{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click='addCart'></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(e) {
        if (!e._constructed) {
          return
        }
        if (!this.food.count) {
          // 不需要再用Vue（import vue）的set了。直接用this.$set
          this.$set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
      },
      decreaseCart(e) {
        if (!e._constructed) {
          return
        }
        if (this.food.count > 0) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .move-enter-active,.move-leave-active {
    transition: all .5s linear
  }

  .move-enter, .move-leave-active {
    transform: translate3D(35px, 0, 0) rotate(360deg)
    opacity: 0
  }

  .cartcontrol
    font-size: 0
    .cart-decrease, .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    .cart-count
      display: inline-block
      font-size: 10px
      text-align: center
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      color: rgb(147, 153, 159)
    .cart-add
      color: rgb(0, 160, 220)
</style>
