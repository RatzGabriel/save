import main from './pageload';
import tab1 from './tab1';
import tab2 from './tab2';
import tab3 from './tab3';

main();
const mainF = () => {
  console.log('test');
  const mainDiv = document.getElementById('content');
  const tab1button = document.createElement('button');
  const tab2button = document.createElement('button');
  const tab3button = document.createElement('button');

  tab1button.addEventListener('click', function () {
    tab1();
  });
  tab2button.addEventListener('click', function () {
    tab2();
  });
  tab3button.addEventListener('click', function () {
    tab3();
  });

  tab1button.innerText = 'tab1';
  tab2button.innerText = 'tab2';
  tab3button.innerText = 'tab3';
  mainDiv.appendChild(tab1button);
  mainDiv.appendChild(tab2button);
  mainDiv.appendChild(tab3button);
};

mainF();
