const tab1 = () => {
  const mainDiv = document.getElementById('1');
  mainDiv.innerHTML = '';
  console.log(mainDiv);
  const p = document.createElement('p');
  p.innerText = 'tab1';
  console.log(p);
  mainDiv.appendChild(p);
};

export default tab1;
