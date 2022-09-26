const TIMELINE_URL = 'http://localhost:1337/api/user-profiles/1';

const rootNode = document.getElementById('root');

function generateHTMLtemplate(data) {
  console.log(data);
  return `
  <div>
  <p>${data}</p>
  </div>
  `;
}

function renderDataToTheDom(node, data) {
  console.log(data.data.attributes);
  for (let i in data.data.attributes) {
    let y = document.createElement('p');
    console.log(data.data.attributes[i]);
    y.innerHTML = data.data.attributes[i];
    rootNode.appendChild(y);
  }
}

async function getData(url) {
  try {
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    renderDataToTheDom(root, data);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

getData(TIMELINE_URL);
