import {Component} from '@angular/core';
import TodoListItem from './todo-list-item.component';

@Component({
    standalone: true,
    imports: [TodoListItem],
    selector:'todo-list',
    template:`Ola
        <ul>
        <todo-list-item></todo-list-item>
        <todo-list-item></todo-list-item>
        </ul>
    `,
    styles:`
    ul {
        display: flex;
        flex-direction: column
    }
    `
})
export default class TodoList {}