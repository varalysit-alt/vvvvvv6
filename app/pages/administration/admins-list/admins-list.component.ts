import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../domains/services/admin.service';
import { Admin } from '../../../domains/modules/admin.model';

@Component({
  selector: 'app-admins-list',
  template: `
    <h2>Список администраторов</h2>
    <table border="1" cellpadding="8">
      <thead>
        <tr><th>ID</th><th>Имя</th><th>Email</th><th>Роль</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let admin of admins">
          <td>{{ admin.id }}</td><td>{{ admin.username }}</td><td>{{ admin.email }}</td><td>{{ admin.role }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class AdminsListComponent implements OnInit {
  admins: Admin[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe(data => this.admins = data);
  }
}