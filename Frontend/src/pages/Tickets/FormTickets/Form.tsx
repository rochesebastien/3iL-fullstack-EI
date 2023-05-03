import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import {createTicket,getTicketByID, updateTicket} from '../../../data/Repository'

interface Ticket { 
  id: number;
  titre: string;
  description: string;
}

function Form() {
  const {id}= useParams();

  const [ticket, setTicket] = useState<Ticket>();
  const navigate = useNavigate();
    
    useEffect(() => {
      async function GetTicketFetch () {
        if(id){
          const ticket = await getTicketByID(Number(id));
          
          setTicket(ticket);
        }
        
    }
    GetTicketFetch ();
    },[id]);

    async function HandleActionTicket(event:any) {
      event.preventDefault();
      
      
      const titre = event.target.elements[0].value;
      const description = event.target.elements[1].value;

      if(id){
        await updateTicket(Number(id),titre,description);      
      } else {
        await createTicket(titre,description);
      }
      navigate('/tickets');
    }

    return (
      <>
      <div className='form-ctn'>
        
        <center><h1>{(id ? `Modifier le ticket ${id}` : 'Ajouter un ticket')}</h1></center>
        <center>
          <form  onSubmit={()=>HandleActionTicket(event)}>
          <input type="text" name="" id="" placeholder={(ticket ? `${ticket.titre}` : 'Titre ..')} />
          <input type="text" id="" placeholder={(ticket ? `${ticket.description}` : 'Description ..')}></input>
          <input type="submit" value="Ajouter" />
          </form>
        </center>
      </div>
        

      </>
    )
  }

  export default Form