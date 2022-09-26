const tab3 = () => {
  const mainDiv = document.getElementById('1');
  mainDiv.innerHTML = '';
  const p = document.createElement('p');
  p.innerText = 'tab3';
  mainDiv.appendChild(p);
};

export default tab3;
