import {Component, Input} from '@angular/core';

@Component({
    selector:'todo-list-item',
    templateUrl:'./todo-list-item.component.html',
    styleUrl:'./todo-list-item.component.css',
    standalone: true
})
export default class TodoListItem {
    @Input() taskTitle = '';
    isComplete = false;

    completeTask(){
        this.isComplete = true;
    }

    updateTitle(newTite: string){
        this.taskTitle = newTite;
    }
}