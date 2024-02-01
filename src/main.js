
import {Menu } from './Menu-bar.js'
import {home } from './home.js'
import {menu} from "./menu.js"
import {About} from "./about.js"


import "./styles.css"



function  Restaurant(){
    
    const dinner = {

        start: function(){
            let menubar = Menu().setUp()
            document.querySelector('nav').append(menubar)
            let casa = home().getHome()
             document.getElementById('content').append(casa) 
        } ,

        blank: function(){
            let padre  =   Array.from(document.getElementById('content').children)
           padre.forEach((hijo) => hijo.remove())
        },


        events: function(){
            ///Home event
            document.getElementById('buttonHome').addEventListener('click',function(event){
                event.preventDefault()
                console.log("i work")
           if( document.getElementById('content').hasChildNodes()) {
            
                dinner.blank()

            
                   console.log( document.getElementById('content').hasChildNodes())
              
                    let casa = home().getHome()
                     document.getElementById('content').append(casa)
                    console.log( document.getElementById('content').hasChildNodes())
           }
            })

            /// event for menu 

             document.getElementById('buttonMenu').addEventListener('click',function(event){
                dinner.blank()
                let hamburgesas = document.createElement('div');
                hamburgesas.setAttribute("id","idol")
                document.getElementById('content').append(hamburgesas)
                let elementos = menu().burgerSix()

                elementos.forEach(burger => {
                    hamburgesas.append(burger);
                })


             })


             // event for About

             document.getElementById('buttonAbout').addEventListener('click',function(event){
                event.preventDefault()
                dinner.blank()
                let about = About()
                let contenedor = document.createElement('div')
                contenedor.setAttribute("id","contenedor")
                document.getElementById('content').append(contenedor)
                contenedor.append(about.getAbout())
                contenedor.append(about.getRetoric())





             })

        }

        



    }

    return dinner

}

 Restaurant().start()

Restaurant().events()