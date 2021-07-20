Vue.config.devtools = true

const app = new Vue ({
    el: '#app',
    data: {
      products: [
        {
          name: "bed",
          price: 25,
          img: "img/bed.jpg"
        },
        {
          name: "bone",
          price: 10,
          img: "img/bone.jpg"
        },
        {
          name: "treats",
          price: 10,
          img: "img/treats.jpg"
        },
        {
          name: "dryfood",
          price: 10,
          img: "img/dry food.jpg"
        },
        {
          name: "chewabletoy",
          price: 10,
          img: "img/chewable toy.jpg"
        },
        {
          name: "chewableweight",
          price: 15,
          img: "img/chewable weight.jpg"
        },
        {
          name: "trasportbag",
          price: 25,
          img: "img/trasport bag.jpg"
        },
        {
          name: "catleash",
          price: 10,
          img: "img/cat leash.jpg"
        },
      ],
      wishList: []
    }, 
    created() {
        
    },
    methods: {
    addWishList() {
      this.products.filter((product) => {
        this.wishList.push({
          name: product.name,
          price: product.price,
          img: product.img
        })
      })
      // ho provato a pushre anche solo l index ma non mi pusha niente
    }
  }
})
