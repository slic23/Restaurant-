function menu(){
    const carta = {
        MrBurger: document.createElement('div'),
        BigBurger: document.createElement('div'),
        burgers: [],


        
        
         
        setUpBuger: function(){
            /// here i create each burger within his click order 
            
            let burger = document.createElement('div')
            burger.setAttribute("id","burger")
            let Divimg = document.createElement('div')
             burger.append(Divimg)
            let img = document.createElement('img')
            img.src ="JAM.jpg"
            Divimg.append(img)
            let OrderDiv = document.createElement('div')
            burger.append(OrderDiv)
            let order = document.createElement('button')
            order.textContent = "order"
            OrderDiv.append(order)
            
            this.MrBurger.append(burger)

           
           // this.BigBurger.setAttribute('id',"bigburger")
            return burger
        },

        makingSix: function(){
            for(let x = 0 ; x < 6 ; x++){
                this.burgers.push(this.setUpBuger())
            }

            console.log(this.burgers)
        }, 

        burgerSix: function(){
            this.makingSix()
            return this.burgers
        }

    }
    return carta
}
export {
    menu
}