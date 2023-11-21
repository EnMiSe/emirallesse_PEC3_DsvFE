import { TodoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';
import { TodoViews } from './views/todo.views';

const app = new TodoController(new TodoService(), new TodoViews());
