import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dia-list',
  standalone: true,
  imports: [],
  templateUrl: './dia-list.component.html',
  styleUrl: './dia-list.component.css'
})
export class DiaListComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private testId = 0;
  
  ngOnInit(): void {
    this.testId = this.activatedRoute.snapshot.params['id'];
    
    // bv. get all the dias from category 5 and show them in the viewer

  }

}
