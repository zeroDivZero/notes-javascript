# SAMPLE PROJECT

Create project directory. Then:

```bash
npm init -y # creates `package.json`
npm i axios # installs `axios`
```

In project, create file `index.ts`:

```ts
import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url)
  .then(response => {
    const todo = response.data as Todo; // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  });

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}
  `);
}

```

## Compile

```bash
tsc index.ts
```

Will create `index.js`. Then:

```bash
node index.js
```

## Compile and Execute

Alternatively, do both steps in one:

```bash
ts-node index.ts
```
