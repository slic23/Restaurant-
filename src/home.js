function home(){
    const homeburger = {
        welcome: document.createElement('div'),
        texto: document.createElement('div'),
        
        
        homeElements: document.createElement('div'),
    

        setUp: function(){
            //set up homelements atribute 
            this.homeElements.setAttribute("id","contenedor")



            // Set up welcome div
            this.welcome.textContent = "Welcome to Issam Ramdani Dinner";
            this.welcome.setAttribute("id", "welcome");
            this.homeElements.append(this.welcome);

            // Set up text div
            this.texto.textContent = "Indulge in a culinary journey where flavors come to life. At Our Simple Restaurant, we invite you to savor every moment and every bite. Our commitment to quality ingredients and exceptional service ensures that your dining experience is nothing short of extraordinary.";
            this.texto.setAttribute("id", "Texto");
            this.homeElements.append(this.texto);

            
           
        },
        getHome: function(){
            return this.homeElements;
        }
    }

    homeburger.setUp();
    return homeburger;
}




export {
    home
}