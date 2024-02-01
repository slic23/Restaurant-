function About(){
    const about = {
        
        About: document.createElement('div'),
        Retoric:document.createElement('div'),
        content: function(){
            this.About.setAttribute("id","About-title")
            this.About.textContent = "About"
            
            this.Retoric.textContent = "At Simple Restaurant , we are committed to providing an exceptional dining experience. From the moment you walk through our doors, our attentive staff is dedicated to ensuring your satisfaction. Our menu features a delightful array of dishes, each crafted with care and precision. Whether you're joining us for a casual lunch or a special celebration, we promise to make every visit a memorable one."
            this.Retoric.setAttribute('id',"retoric")
        },

        getAbout: function(){
            return this.About
        },

        getRetoric : function(){
            return this.Retoric;
        }


       


    }

    about.content()
    return about




}



export {About}

