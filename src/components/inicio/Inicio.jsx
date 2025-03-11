import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


 const Inicio=()=>{
    return<>
     <main className="container-fluid">
            <div className="row">
                <h1 >lista de tareas</h1>
                <div className="col-sm-12 col-lg-12">
                    <div className="input-div"> 
                        <input type="text" className="input" placeholder="tareas a agregar" />
                        <button  className="boton-agregar"><FontAwesomeIcon icon={faPlus} /></button>
                        
                    </div>
                </div>
                <div className='col-sm-12 col-lg-12   container'>
                    <div className='item'>
                        <input type="text"  className='item-input' disabled />
                        <button  className='boton-editar'>🔒</button>
                        <button   className='boton-remover'>  🗑️ </button>
                        

                    </div>

                </div>

            </div>
        </main>
    </>
 }

 export default Inicio