import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IssuesService } from '../services/issues-services';

@Component({
    moduleId: module.id,
    selector: 'issues-list',
    templateUrl: 'issues-list.component.html',
    styleUrls: ['issues-list.component.css'],
    providers: [ IssuesService]
})
export class IssuesListComponent implements OnInit {

    public issues: any;

    public getIssues() {
        this.issuesService.get().subscribe(res => {
        this.issues = res.json();
        console.log(res);
        }, error => {
            console.log(error); 
        });
    }

    constructor(public issuesService: IssuesService) {
        
    }

     ngOnInit() {
        this.getIssues();
    }


}