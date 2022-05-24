import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';

// Ticket Model
export interface Ticket{
  ticketId: number,
  title: string,
  description: string,
  status: string,
  submittedBy: string,
  assignedTo: string,
  assignedBy: string,
  projectName: string,
  assignedNotified: string,
  userId: string,
  comments:[]
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl='https://localhost:7094/api/tickets/';

  constructor(private http:HttpClient) { }

  getTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.apiUrl);
  }
}
