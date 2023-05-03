import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {getAllTickets,deleteTicket,updateStatusTicket} from '../../data/Repository'
import { useNavigate } from "react-router-dom";

interface Ticket { 
  id: number;
  titre: string;
  description: string;
  status: string;
}


function Tickets() {
  const navigate = useNavigate();
  const [tickets, setTicket] = useState<Ticket[]>([]);

  useEffect(() => {
    async function GetTicketsFetch () {
      const tickets = await getAllTickets();
      setTicket(tickets);
  }
  GetTicketsFetch ();
  },[]);

  async function handleDeleteTicket(ticket: Ticket) {
    if (ticket.status == "TERMINE") {
      alert("Impossible de supprimer un ticket terminé");
    } else {
      await deleteTicket(ticket.id);
      const filteredtickets = tickets.filter (_ticket => _ticket.id !== ticket.id);
      setTicket(filteredtickets);
    }
    
    
  }

  async function handleChangeStatus(ticket: Ticket,event:any) {
    if (event.target.value != ticket.status) {
      await updateStatusTicket(ticket.id,event.target.value);
      navigate('/tickets');
    }  
    
  }

    return (
      <>
      <center><h1>Gestion des tickets<Link className="btn" to="/tickets/create">Ajouter un ticket</Link></h1> </center>
      
      {tickets.length > 0  ?  
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Status</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
        {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.titre}</td>
                  <td>{ticket.description}</td>
                  <td>
                    <select name="" id="" defaultValue={(ticket.status  ? ticket.status : 'AFAIRE')} onChange={(event) => handleChangeStatus(ticket,event)}>
                      <option value="A_FAIRE">A faire </option>
                      <option value="EN_COURS">En cours </option>
                      <option value="TERMINE">Terminé </option>
                    </select>
                  </td>
                  <td><Link to={`/tickets/${ticket.id}`}>Modifier</Link> </td>
                  <td><a onClick={() => handleDeleteTicket(ticket)}>Supprimer</a></td>
                </tr>
                ))}
        </tbody>
      </table>
      : 
      
      <center><h3>Aucune ticket trouvé</h3></center>
       }
      </>
    )
  }

  export default Tickets