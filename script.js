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
      wishList: [],
    }, 
    created() {
    },
    methods: {
      addWishList(index) {
        this.wishList.push(this.products[index]) 
        this.products.slice(index, 1)
        let unique = [...new Set(this.wishList)]
        this.wishList = unique
      },
       removeWishList(index) {
       this.wishList.splice(index, 1)
      }
    }
})

