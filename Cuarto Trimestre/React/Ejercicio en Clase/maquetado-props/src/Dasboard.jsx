import Cards from "./Card"
function Dashboard (props) {
    return(
        <div className="dashboard">
            <Cards nombredisney ={props.nombretarjeta}
            producto= "Fresas"
            precio = "2000">   
            </Cards>
            <Cards nombredisney ={props.nombretarjeta}
            producto= "Uvas"
            precio = "2000">   
            </Cards>
            <Cards nombredisney ={props.nombretarjeta}
            producto= "Naranjas"
            precio = "2000">   
            </Cards>
            <Cards nombredisney ={props.nombretarjeta}
            producto= "Salchipapa"
            precio = "2000">   
            </Cards>
            <Cards nombredisney ={props.nombretarjeta}
            producto= "Agua"
            precio = "2000">   
            </Cards>
            <Cards nombredisney ={props.nombretarjeta}
            producto= "mandarina"
            precio = "2000">   
            </Cards>                      
        </div>
    )
}
export default Dashboard