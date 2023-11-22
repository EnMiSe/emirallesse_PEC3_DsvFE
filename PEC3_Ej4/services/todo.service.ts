import { Todo } from '../models/todo.model';

/**
 * @class Service
 *
 * Manages the data of the application.
 */
class TodoService {
  private todos: Todo[];
  private onTodoListChanged: (todos: Todo[]) => void;

  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos') || "[]").map(
      (todoData: { text: string; complete: boolean; id?: string }) => new Todo(todoData)
    );    
  }

  bindTodoListChanged(callback: (todos: Todo[]) => void): void {
    this.onTodoListChanged = callback;
  }

  private _commit(todos: Todo[]): void {
    this.onTodoListChanged(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  addTodo(text: string): void {
    const newTodo = new Todo({ text, complete: false });
    this.todos.push(newTodo);

    this._commit(this.todos);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);

    this._commit(this.todos);
  }

  toggleTodo(id: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}

export { TodoService };

