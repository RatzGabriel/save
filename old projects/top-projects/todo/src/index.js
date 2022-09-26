// const createTodo = (title, description, dueDate, priority, notes, project) => {
//   return { title, description, dueDate, priority, notes, project };
// };

// const todos = [];
// const projects = [
//   {
//     title: 'project1',
//   },
//   {
//     title: 'project2',
//   },
// ];

// const createTodosOnStartUp = (function () {
//   for (let i = 0; i < 5; i++) {
//     let todo = createTodo(
//       `todo ${i}`,
//       'testdesc',
//       '03.02.2021',
//       3,
//       'notes',
//       'project1'
//     );
//     todos.push(todo);
//   }
//   for (let i = 5; i < 10; i++) {
//     let todo = createTodo(
//       `todo ${i}`,
//       'testdesc',
//       '03.02.2021',
//       3,
//       'notes',
//       'project2'
//     );
//     todos.push(todo);
//   }
// })();

// const createProject = (title) => {
//   const getProjectsFromDom = document.getElementById('projects');
//   let project = document.createElement('div');
//   let projectTitle = document.createElement('p');
//   projectTitle.innerText = title;
//   project.appendChild(projectTitle);
//   const select = document.createElement('button');
//   select.innerText = 'Select Project';
//   project.appendChild(select);
//   select.addEventListener('click', function () {
//     let todoFilter = todos.filter((todo) => todo.project === title);
//     const getToDosFromDom = document.getElementById('todos');
//     getToDosFromDom.innerHTML = '';
//     for (let i = 0; i < todoFilter.length; i++) {
//       createTodoCard(todoFilter[i]);
//     }
//     const getNav = document.getElementById('nav');
//     console.log(getNav.classList);
//     if (getNav.className === 'show') {
//       console.log('show');
//       return (getNav.classList = 'hide');
//     }
//     if (getNav.className === 'hide') {
//       console.log('hide');
//       return (getNav.classList = 'show');
//     }
//   });
//   getProjectsFromDom.appendChild(project);
// };

// const createTodoCard = (singleTodo) => {
//   const getProjectsFromDom = document.getElementById('todos');
//   let todo = document.createElement('div');
//   todo.classList = 'todoCard';
//   for (const [value] of Object.entries(singleTodo)) {
//     let p = document.createElement('p');
//     p.innerText = value;
//     todo.appendChild(p);
//   }
//   getProjectsFromDom.appendChild(todo);
// };

// const createDomOnStartUp = () => {
//   for (let i = 0; i < projects.length; i++) {
//     createProject(projects[i].title);
//   }
//   for (let i = 0; i < todos.length; i++) {
//     createTodoCard(todos[i]);
//   }
// };

// const addLogic = () => {
//   const getAddProject = document.getElementById('addProject');
//   getAddProject.addEventListener('click', function () {
//     const getProjectsFromDom = document.getElementById('projects');
//     getProjectsFromDom.innerHTML = '';
//     const getProjectTitle = document.getElementById('projectTitle').value;

//     projects.push({ title: getProjectTitle });
//     for (let i = 0; i < projects.length; i++) {
//       createProject(projects[i].title);
//     }
//   });
// };
// createDomOnStartUp();
// addLogic();

// fetch('api.openweathermap.org/data/2.5/weather?q=London').then((res) =>
//   console.log(res)
// );

const getApiData = async (url) => {
  const fetchedData = await fetch(url);
  return fetchedData;
};

const onStartUp = () => {
  const getImageWithId = document.getElementById('img');
  getApiData('api.openweathermap.org/data/2.5/weather?q=London');
};
