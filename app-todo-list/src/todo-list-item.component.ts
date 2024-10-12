import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    imports:[FormsModule],
    selector:'todo-list-item',
    templateUrl:'./todo-list-item.component.html',
    styleUrl:'./todo-list-item.component.css',
})
export default class TodoListItem {
    @Input() taskTitle = '';
    isComplete:boolean = false;
    isEditable:boolean = false;

    completeTask(){
        this.isComplete = true;
    }
    
    activeEdit(){
        this.isEditable = !this.isEditable;
    }
}