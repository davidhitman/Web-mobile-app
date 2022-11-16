let app = new Vue({ // The Vue instance
    el: '#app',
    data: {
         lessons:lessons,
         cart:[]
    },
    methods:{
        addToCart(lesson){
            this.cart.push[{lessons:lesson.id}]
        }
    }
})