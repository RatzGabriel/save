console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

// const p = getUser(1);
// p.then((user) => getRepositories(user.gitHubUsername))
//   .then((repos) =>
//     getCommits(repos[0]).then((commmits) => console.log(commmits))
//   )
//   .catch((err) => console.log(err));

//Async and Await
async function displayCommits() {
  try {
    const result = await getUser(1);
    const repos = await getRepositories(result.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error', err.message);
  }
}

displayCommits();

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
      //reject(new Error('coult not get repos'));
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API2...');
      resolve(['commit']);
    }, 2000);
  });
}
