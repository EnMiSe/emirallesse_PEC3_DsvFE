import { TodoService } from '../services/todo.service';
import { TodoViews } from '../views/todo.views';
import { Todo } from '../models/todo.model';

/**
 * @class TodoController
 *
 * Enllaça l'entrada d'usuari amb la sortida de la vista.
 */
class TodoController {
  private service: TodoService;
  private view: TodoViews;

  constructor(service: TodoService, view: TodoViews) {
    this.service = service;
    this.view = view;
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    this.onTodoListChanged(this.service.getTodos());
  }

  onTodoListChanged = (todos: Todo[]): void => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = (todoText: string): void => {
    this.service.addTodo(todoText);
  };
  
  handleEditTodo = (id: string, todoText: string): void => {
    this.service.editTodo(id, todoText);
  };

  handleDeleteTodo = (id: string): void => {
    this.service.deleteTodo(id);
  };

  handleToggleTodo = (id: string): void => {
    this.service.toggleTodo(id);
  };
}

export { TodoController };

