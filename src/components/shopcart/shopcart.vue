<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class='{"highlight":totalCount > 0}'>
            <i class="icon icon-shopping_cart"></i>
          </div>
          <div v-show='totalCount > 0' class="num">{{totalCount}}</div>
        </div>
        <div class="price" :class='{"highlight":totalPrice > 0}'>￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right" :class='payClass'>
        <div class="pay">
          {{payDesc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      selectFoods: {
        type: Array,
        default() {
          return [{count: 1, price: 10}]
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    computed: {
      totalPrice() {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      },
      totalCount() {
        let count = 0
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        return count
      },
      payDesc() {
        if (this.totalPrice === 0) {
//          return `另需配送费￥${this.minPrice}元`
          return '￥' + this.minPrice + '元起送'
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice
          return '还差￥' + diff + '元起送'
        } else {
          return '去结算'
        }
      },
      payClass() {
        if (this.totalPrice >= this.minPrice) {
          return 'enough'
        } else {
          return 'not-enough'
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .shopcart
    position: fixed
    bottom: 0
    left: 0
    height: 48px
    width: 100%
    z-index: 50
    .content
      display: flex
      background-color: #141d27
      font-size: 0
      color: rgba(255, 255, 255, .4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          vertical-align: top
          border-radius: 50%
          background-color: #141d27
          .logo
            width: 100%
            height: 100%
            text-align: center
            border-radius: 50%
            background-color: #2b343c
            color: #80858a
            &.highlight
              background-color: rgb(0, 160, 220)
              color: #fff
            .icon-shopping_cart
              font-size: 24px
              line-height: 44px
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #ffffff
            background-color: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .4)
        .price
          display: inline-block
          margin-top: 12px
          vertical-align: top
          line-height: 24px
          padding-right: 12px
          border-right: 1px solid rgba(255, 255, 255, .1)
          font-size: 16px
          font-weight: 700
          box-sizing: border-box
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
        &.not-enough
          background-color: #2b343c
        &.enough
          background-color: #00b43c
          color: #fff
</style>
