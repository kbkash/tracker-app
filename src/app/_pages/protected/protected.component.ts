import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  compactState = false
  toggleSidebar(){
    this.sidebarService.toggle(!this.compactState, 'left')
  }

  doLogout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login']);

  }

  constructor(
    private sidebarService: NbSidebarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
