const tab2 = () => {
  const mainDiv = document.getElementById('1');
  mainDiv.innerHTML = '';
  const p = document.createElement('p');
  p.innerText = 'tab2';
  mainDiv.appendChild(p);
};

export default tab2;
