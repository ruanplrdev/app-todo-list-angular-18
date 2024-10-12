import { Component } from '@angular/core';
import TodoListItem from './todo-list-item.component';
import { FormsModule } from '@angular/forms';

interface Task {
    id: string,
    isComplete: boolean,
    titleTask: string
}
@Component({
    standalone: true,
    imports: [TodoListItem, FormsModule],
    selector: 'todo-list',
    template: `
        <ul>
        @for (task of tasks; track task.id) {
            <div style="display:flex;">
                <todo-list-item [taskTitle]="task.titleTask"></todo-list-item>
                <button type="button" (click)="deletar(task.id)">deletar</button>
            </div>
        }
        </ul>
        <label for="framework">
        <input id="framework" type="text" [(ngModel)]="inputTask" />
        </label>
        <button type="button" (click)="add(inputTask)">Add</button>
    `,
    styles: `
        ul {
            display: flex;
            flex-direction: column;
            padding:0 10px;
        }
    `
})
export default class TodoList {
    tasks: Task[] = [
        { id: '1', isComplete: false, titleTask: 'Lavar a louça' },
        { id: '2', isComplete: false, titleTask: 'Fazer almoço' },
        { id: '3', isComplete: false, titleTask: 'Colocar comida para os cachorros' }
    ];
    inputTask:string= '';

    add(titleTxt:string ) {
        const item:Task = {
            id: this.tasks.length.toString(),
            isComplete: false,
            titleTask: titleTxt
        }
        this.tasks.push(item);
    }
    deletar(id:string){
        this.tasks =  this.tasks.filter((value)=> value.id !== id );
    }
}