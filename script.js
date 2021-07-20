Vue.config.devtools = true

const app = new Vue ({
    el: '#app',
    data: {
      products: [
        {
          name: "bed",
          price: 25,
          img: "bed.jpg"
        },
        {
          name: "bone",
          price: 10,
          img: "bone.jpg"
        },
        {
          name: "treats",
          price: 10,
          img: "treats.jpg"
        },
        {
          name: "dryfood",
          price: 10,
          img: "dry food.jpg"
        },
        {
          name: "chewabletoy",
          price: 10,
          img: "chewable toy.jpg"
        },
        {
          name: "chewableweight",
          price: 15,
          img: "chewable weight.jpg"
        },
        {
          name: "trasportbag",
          price: 25,
          img: "trasport bag.jpg"
        },
        {
          name: "catleash",
          price: 10,
          img: "cat leash.jpg"
        },
      ]
    }, 
    created() {
        
    },
    methods: {
  }
})
