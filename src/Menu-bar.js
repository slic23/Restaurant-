function Menu(){

    const menuComponenetes = {

        divGeneral: document.createElement('div'),
        divHome : document.createElement('div'),
        divMenu : document.createElement('div'),
        divAbout: document.createElement('div'),

        setUp: function(){
            //creating buttons for each div 
            //buttonHome
            let buttonHome = document.createElement('button')
            buttonHome.textContent = "Home"
            buttonHome.setAttribute("id","buttonHome")
            this.divHome.append(buttonHome)
            
            ///buttonMenu
            let buttonMenu = document.createElement('button')
            buttonMenu.textContent = "Menu"
            buttonMenu.setAttribute("id","buttonMenu")
            this.divMenu.append(buttonMenu)

            // buttonAbout
            let buttonAbout = document.createElement('button')
            buttonAbout.textContent = "About"
            buttonAbout.setAttribute("id","buttonAbout")
            this.divAbout.append(buttonAbout)
            ////add atribute to divGeneral
            this.divGeneral.setAttribute('id',"divButtons")
            
            ////// adding to divGeneral the buttons
            this.divGeneral.append(this.divHome)
            this.divGeneral.append(this.divMenu)
            this.divGeneral.append(this.divAbout)


            return this.divGeneral

        }
    }

    
    return menuComponenetes

}
export {Menu}