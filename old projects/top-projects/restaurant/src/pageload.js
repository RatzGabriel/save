const main = () => {
  const mainDiv = document.getElementById('content');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const h1 = document.createElement('h1');
  p.innerText =
    'Now remove those elements from the HTML (so leave only the <html>, <body>, and <div id=';
  h1.innerText = 'Restaurant Page';
  img.src = 'Download.jpeg';
  mainDiv.appendChild(h1);
  mainDiv.appendChild(img);
  mainDiv.appendChild(p);
};

export default main;
