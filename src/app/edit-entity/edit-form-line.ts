import { Component, OnInit, ViewChild } from '@angular/core';

import { PropertyComponent } from 'angularm';

@Component({
    selector: 'div [mgEditFormLine]',
    template:
    `<div clas="form-group">    
            <label
                class="control-label"
                for="{{property.propertyType.entityType.singular}}_{{property.propertyType.name}}">
                {{property.propertyType.name | titleCase}}
            </label>
            <input
                type="{{configuration.inputType}}"
                class="form-control"
                id="{{property.propertyType.entityType.singular}}_{{property.propertyType.name}}"
                placeholder="{{property.propertyType.name | titleCase}}"
                [formControl]="mgFormControl"
                [(ngModel)]="property.value">
    </div>
        <br>`,
})
export class EditFormLineComponent extends PropertyComponent { }