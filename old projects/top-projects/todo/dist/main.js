/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const createTodo = (title, description, dueDate, priority, notes, project) => {
  return { title, description, dueDate, priority, notes, project };
};

const todos = [];
const projects = [
  {
    title: 'project1',
  },
  {
    title: 'project2',
  },
];

const createTodosOnStartUp = (function () {
  for (let i = 0; i < 5; i++) {
    let todo = createTodo(
      `todo ${i}`,
      'testdesc',
      '03.02.2021',
      3,
      'notes',
      'project1'
    );
    todos.push(todo);
  }
  for (let i = 5; i < 10; i++) {
    let todo = createTodo(
      `todo ${i}`,
      'testdesc',
      '03.02.2021',
      3,
      'notes',
      'project2'
    );
    todos.push(todo);
  }
})();

const createProject = (title) => {
  const getProjectsFromDom = document.getElementById('projects');
  let project = document.createElement('div');
  let projectTitle = document.createElement('p');
  projectTitle.innerText = title;
  project.appendChild(projectTitle);
  const select = document.createElement('button');
  select.innerText = 'Select Project';
  project.appendChild(select);
  select.addEventListener('click', function () {
    let todoFilter = todos.filter((todo) => todo.project === title);
    const getToDosFromDom = document.getElementById('todos');
    getToDosFromDom.innerHTML = '';
    for (let i = 0; i < todoFilter.length; i++) {
      createTodoCard(todoFilter[i]);
    }
    const getNav = document.getElementById('nav');
    console.log(getNav.classList);
    if (getNav.className === 'show') {
      console.log('show');
      return (getNav.classList = 'hide');
    }
    if (getNav.className === 'hide') {
      console.log('hide');
      return (getNav.classList = 'show');
    }
  });
  getProjectsFromDom.appendChild(project);
};

const createTodoCard = (singleTodo) => {
  const getProjectsFromDom = document.getElementById('todos');
  let todo = document.createElement('div');
  todo.classList = 'todoCard';
  for (const [value] of Object.entries(singleTodo)) {
    let p = document.createElement('p');
    p.innerText = value;
    todo.appendChild(p);
  }
  getProjectsFromDom.appendChild(todo);
};

const createDomOnStartUp = () => {
  for (let i = 0; i < projects.length; i++) {
    createProject(projects[i].title);
  }
  for (let i = 0; i < todos.length; i++) {
    createTodoCard(todos[i]);
  }
};

const addLogic = () => {
  const getAddProject = document.getElementById('addProject');
  getAddProject.addEventListener('click', function () {
    const getProjectsFromDom = document.getElementById('projects');
    getProjectsFromDom.innerHTML = '';
    const getProjectTitle = document.getElementById('projectTitle').value;

    projects.push({ title: getProjectTitle });
    for (let i = 0; i < projects.length; i++) {
      createProject(projects[i].title);
    }
  });
};
createDomOnStartUp();
addLogic();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBLGNBQWMsRUFBRTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxjQUFjLEVBQUU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHdCQUF3QjtBQUM1QyxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0KSA9PiB7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0IH07XG59O1xuXG5jb25zdCB0b2RvcyA9IFtdO1xuY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ3Byb2plY3QxJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAncHJvamVjdDInLFxuICB9LFxuXTtcblxuY29uc3QgY3JlYXRlVG9kb3NPblN0YXJ0VXAgPSAoZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyhcbiAgICAgIGB0b2RvICR7aX1gLFxuICAgICAgJ3Rlc3RkZXNjJyxcbiAgICAgICcwMy4wMi4yMDIxJyxcbiAgICAgIDMsXG4gICAgICAnbm90ZXMnLFxuICAgICAgJ3Byb2plY3QxJ1xuICAgICk7XG4gICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuICBmb3IgKGxldCBpID0gNTsgaSA8IDEwOyBpKyspIHtcbiAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8oXG4gICAgICBgdG9kbyAke2l9YCxcbiAgICAgICd0ZXN0ZGVzYycsXG4gICAgICAnMDMuMDIuMjAyMScsXG4gICAgICAzLFxuICAgICAgJ25vdGVzJyxcbiAgICAgICdwcm9qZWN0MidcbiAgICApO1xuICAgIHRvZG9zLnB1c2godG9kbyk7XG4gIH1cbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgZ2V0UHJvamVjdHNGcm9tRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2VsZWN0LmlubmVyVGV4dCA9ICdTZWxlY3QgUHJvamVjdCc7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGxldCB0b2RvRmlsdGVyID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnByb2plY3QgPT09IHRpdGxlKTtcbiAgICBjb25zdCBnZXRUb0Rvc0Zyb21Eb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MnKTtcbiAgICBnZXRUb0Rvc0Zyb21Eb20uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvRmlsdGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjcmVhdGVUb2RvQ2FyZCh0b2RvRmlsdGVyW2ldKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0TmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpO1xuICAgIGNvbnNvbGUubG9nKGdldE5hdi5jbGFzc0xpc3QpO1xuICAgIGlmIChnZXROYXYuY2xhc3NOYW1lID09PSAnc2hvdycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XG4gICAgICByZXR1cm4gKGdldE5hdi5jbGFzc0xpc3QgPSAnaGlkZScpO1xuICAgIH1cbiAgICBpZiAoZ2V0TmF2LmNsYXNzTmFtZSA9PT0gJ2hpZGUnKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGlkZScpO1xuICAgICAgcmV0dXJuIChnZXROYXYuY2xhc3NMaXN0ID0gJ3Nob3cnKTtcbiAgICB9XG4gIH0pO1xuICBnZXRQcm9qZWN0c0Zyb21Eb20uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvQ2FyZCA9IChzaW5nbGVUb2RvKSA9PiB7XG4gIGNvbnN0IGdldFByb2plY3RzRnJvbURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpO1xuICBsZXQgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvLmNsYXNzTGlzdCA9ICd0b2RvQ2FyZCc7XG4gIGZvciAoY29uc3QgW3ZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzaW5nbGVUb2RvKSkge1xuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgdG9kby5hcHBlbmRDaGlsZChwKTtcbiAgfVxuICBnZXRQcm9qZWN0c0Zyb21Eb20uYXBwZW5kQ2hpbGQodG9kbyk7XG59O1xuXG5jb25zdCBjcmVhdGVEb21PblN0YXJ0VXAgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RzW2ldLnRpdGxlKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlVG9kb0NhcmQodG9kb3NbaV0pO1xuICB9XG59O1xuXG5jb25zdCBhZGRMb2dpYyA9ICgpID0+IHtcbiAgY29uc3QgZ2V0QWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gIGdldEFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZ2V0UHJvamVjdHNGcm9tRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgZ2V0UHJvamVjdHNGcm9tRG9tLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGdldFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKS52YWx1ZTtcblxuICAgIHByb2plY3RzLnB1c2goeyB0aXRsZTogZ2V0UHJvamVjdFRpdGxlIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdHNbaV0udGl0bGUpO1xuICAgIH1cbiAgfSk7XG59O1xuY3JlYXRlRG9tT25TdGFydFVwKCk7XG5hZGRMb2dpYygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9