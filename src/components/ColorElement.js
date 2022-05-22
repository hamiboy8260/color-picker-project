import ColorItem from './Color-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo} from '@fortawesome/free-solid-svg-icons';


function ColorElement() {


  const colors =['#2d3436', '#74E312', '#9B2FEA ','#0EF1CE','#F10EC4','#F10E29'];

  /* SetTheme function, tager fat i baggrundsfarve og sætter den til ny farve (CSS style) */

  const setTheme = (color) => {

    document.documentElement.style.setProperty('--bg-color',color);

  }

   /* SetColor function, nuværende baggrundsfarves værdi */

  const setColor = (event) => {

    const currentColor = event.target.style.getPropertyValue('--bg-color');

    setTheme(currentColor)
  }



  return (



         <div className='color-switcher'>

          
      
        <div className='color-list'>
          {colors.map((color) => <ColorItem setColor={setColor} color={color}/>)}

         <button className="reset-button" onClick={setColor}><br/><FontAwesomeIcon icon={faRedo} /></button>





      

      
        
    </div>



        
  

  
    </div>
  );
}

export default ColorElement;
