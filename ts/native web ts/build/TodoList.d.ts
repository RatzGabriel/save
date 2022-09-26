import { Todo } from "./Todo";
declare class TodoList<TData> {
    private todos;
    constructor();
    note(description: string, data: TData): string;
    edit(id: string, description: string): void;
    tickOff(id: string): void;
    discard(id: string): void;
    getAllTodos(): Todo<TData>[];
    getOpenTodos(): Todo<TData>[];
    getDiscardedTodos(): Todo<TData>[];
    getClosedTodos(): Todo<TData>[];
}
export { TodoList };
