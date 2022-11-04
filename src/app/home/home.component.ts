import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ddata: any=[];
  constructor(private http:HttpClient,private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  // Get dashboard data
  loadDashboardData() {
    return this.dashboardService.getDashboardData().subscribe((data: {}) => {
      this.ddata = data;
    })
  }

}
