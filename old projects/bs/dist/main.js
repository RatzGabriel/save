(()=>{"use strict";const e=function(){let e=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]],t=[],o=[],r=(o,n,i)=>{if(o+i>e.length||n>e[o].length)return alert("not possible on this coords");let l=function(e,t,o){let r=o,n=0,i={x:[],y:t};for(let t=e;t<e+o;t++)i.x.push(t);return{shiplength:r,tp:n,coords:i,hit:(e,t)=>{for(let t=0;t<i.x.length;t++)if(i.x[t]===e)return"hit"==i.x[t]?alert("already a hit,try again"):(i.x[t]="hit",n+=1,!0)},isSunk:()=>n===r}}(o,n,i);for(let t=o+l.shiplength-1;t>=o;t--)""!==e[t][n]?r(o,n,i):e[t][n]="Ship";t.push(l)};return{placeShip:r,board:e,receiveAttack:(r,n)=>{for(let i=0;i<t.length;i++)for(let l=0;l<t[i].coords.x.length;l++)if(t[i].coords.x[l]==r){if(t[i].coords.y==n)return console.log("hit"),t[i].hit(r,n,e),!0===t[i].isSunk()&&(sunkShips+=1),!0;o.push([r,n])}},ships:t}},t=function(){return{placedShips:0,board:e(),attack:(e,t,o)=>{e.receiveAttack(t,o)}}},o=(e,t)=>{const r=document.getElementById("player"),n=document.getElementById("pc");r.innerHTML="",n.innerHTML="";let i=e.board.board,l=t.board.board;function a(r,n){n.forEach(((n,i)=>{n.forEach(((n,l)=>{let a=document.createElement("div");a.className="cellDiv",a.innerText=n,a.addEventListener("click",(function(){console.log(l,i,t.board),!0===t.board.receiveAttack(i,l)&&(console.log("do it"),t.board.board[i][l]="hit",o(e,t))})),r.appendChild(a)}))}))}console.log(i,l),a(r,i),a(n,l)},r=o;!function(){let e=t(),o=t();e.board.placeShip(2,3,3),e.board.placeShip(2,4,3),e.board.placeShip(2,7,3),o.board.placeShip(2,2,3),o.board.placeShip(6,7,4),o.board.placeShip(4,8,2),r(e,o)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsRUFBRyxFQUFHLEdBRXpCLEVBQVkwQyxFQUFXQyxHQU0zQixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnMvLi9zcmMvc2hpcHMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYnMvLi9zcmMvYm9hcmQvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYnMvLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9icy8uL3NyYy9yZW5kZXIvZG9tLmpzIiwid2VicGFjazovL2JzLy4vc3JjL2dhbWVmbG93L2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlU2hpcCh4LCB5LCBsZW5ndGgpIHtcbiAgbGV0IHNoaXBsZW5ndGggPSBsZW5ndGg7XG4gIGxldCB0cCA9IDA7XG4gIGxldCBjb29yZHMgPSB7XG4gICAgeDogW10sXG4gICAgeTogeSxcbiAgfTtcblxuICBsZXQgaGl0ID0gKHgsIHkpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy54Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29vcmRzLnhbaV0gPT09IHgpIHtcbiAgICAgICAgaWYgKGNvb3Jkcy54W2ldID09ICdoaXQnKSByZXR1cm4gYWxlcnQoJ2FscmVhZHkgYSBoaXQsdHJ5IGFnYWluJyk7XG4gICAgICAgIC8vaW5zZXJ0IG1pc3NpbmcgbG9naWNcbiAgICAgICAgY29vcmRzLnhbaV0gPSAnaGl0JztcbiAgICAgICAgdHAgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgIGNvb3Jkcy54LnB1c2goaSk7XG4gIH1cbiAgbGV0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gdHAgPT09IHNoaXBsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIH07XG4gIHJldHVybiB7IHNoaXBsZW5ndGgsIHRwLCBjb29yZHMsIGhpdCwgaXNTdW5rIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iLCJpbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuLi9zaGlwcy9zaGlwcyc7XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgbGV0IGJvYXJkID0gW1xuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gIF07XG5cbiAgbGV0IHNoaXBzID0gW107XG4gIGxldCBtaXNzZWRIaXQgPSBbXTtcblxuICBsZXQgcGxhY2VTaGlwID0gKHgsIHksIGxlbmd0aCkgPT4ge1xuICAgIGlmICh4ICsgbGVuZ3RoID4gYm9hcmQubGVuZ3RoIHx8IHkgPiBib2FyZFt4XS5sZW5ndGgpXG4gICAgICByZXR1cm4gYWxlcnQoJ25vdCBwb3NzaWJsZSBvbiB0aGlzIGNvb3JkcycpO1xuICAgIGxldCBzaGlwID0gY3JlYXRlU2hpcCh4LCB5LCBsZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IHggKyBzaGlwLnNoaXBsZW5ndGggLSAxOyBpID49IHg7IGktLSkge1xuICAgICAgaWYgKGJvYXJkW2ldW3ldICE9PSAnJykgcGxhY2VTaGlwKHgsIHksIGxlbmd0aCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgYm9hcmRbaV1beV0gPSAnU2hpcCc7XG4gICAgICB9XG4gICAgfVxuICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gIH07XG5cbiAgbGV0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uY29vcmRzLngubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHNoaXBzW2ldLmNvb3Jkcy54W2pdID09IHgpIHtcbiAgICAgICAgICBpZiAoc2hpcHNbaV0uY29vcmRzLnkgPT0geSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCcpO1xuICAgICAgICAgICAgc2hpcHNbaV0uaGl0KHgsIHksIGJvYXJkKTtcbiAgICAgICAgICAgIGlmIChzaGlwc1tpXS5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBtaXNzZWRIaXQucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHBsYWNlU2hpcCwgYm9hcmQsIHJlY2VpdmVBdHRhY2ssIHNoaXBzIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZDtcbiIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSAnLi4vYm9hcmQvYm9hcmQnO1xuXG5mdW5jdGlvbiBwbGF5ZXIoKSB7XG4gIGxldCBwbGFjZWRTaGlwcyA9IDA7XG4gIGxldCBib2FyZCA9IGdhbWVCb2FyZCgpO1xuXG4gIGxldCBhdHRhY2sgPSAoYm9hcmQsIHgsIHkpID0+IHtcbiAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9O1xuXG4gIHJldHVybiB7IHBsYWNlZFNoaXBzLCBib2FyZCwgYXR0YWNrIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcbiIsImNvbnN0IHJlbmRlckJvYXJkID0gKHBsYXllciwgZW5lbXkpID0+IHtcbiAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpO1xuICBjb25zdCBwY0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYycpO1xuICBwbGF5ZXJEaXYuaW5uZXJIVE1MID0gJyc7XG4gIHBjRGl2LmlubmVySFRNTCA9ICcnO1xuXG4gIGxldCBib2FyZCA9IHBsYXllci5ib2FyZC5ib2FyZDtcbiAgbGV0IGVuZW15Qm9hcmQgPSBlbmVteS5ib2FyZC5ib2FyZDtcblxuICBjb25zb2xlLmxvZyhib2FyZCwgZW5lbXlCb2FyZCk7XG5cbiAgcmVuZGVyKHBsYXllckRpdiwgYm9hcmQpO1xuICByZW5kZXIocGNEaXYsIGVuZW15Qm9hcmQpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlcihjb250YWluZXIsIGJvYXJkKSB7XG4gICAgYm9hcmQuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNlbGwsIGluZGV4MikgPT4ge1xuICAgICAgICBsZXQgY2VsbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsRGl2LmNsYXNzTmFtZSA9ICdjZWxsRGl2JztcbiAgICAgICAgY2VsbERpdi5pbm5lclRleHQgPSBjZWxsO1xuICAgICAgICBjZWxsRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4MiwgaW5kZXgsIGVuZW15LmJvYXJkKTtcbiAgICAgICAgICBpZiAoZW5lbXkuYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCwgaW5kZXgyKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvIGl0Jyk7XG4gICAgICAgICAgICBlbmVteS5ib2FyZC5ib2FyZFtpbmRleF1baW5kZXgyXSA9ICdoaXQnO1xuICAgICAgICAgICAgcmVuZGVyQm9hcmQocGxheWVyLCBlbmVteSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbERpdik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQm9hcmQ7XG4iLCJpbXBvcnQgcGxheWVyIGZyb20gJy4uL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IHJlbmRlckJvYXJkIGZyb20gJy4uL3JlbmRlci9kb20nO1xuXG5mdW5jdGlvbiBnYW1lKCkge1xuICBsZXQgcGxheWVyT25lID0gcGxheWVyKCk7XG4gIGxldCBwYyA9IHBsYXllcigpO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHMoKSB7XG4gICAgcGxheWVyT25lLmJvYXJkLnBsYWNlU2hpcCgyLCAzLCAzKTtcbiAgICBwbGF5ZXJPbmUuYm9hcmQucGxhY2VTaGlwKDIsIDQsIDMpO1xuICAgIHBsYXllck9uZS5ib2FyZC5wbGFjZVNoaXAoMiwgNywgMyk7XG5cbiAgICBwYy5ib2FyZC5wbGFjZVNoaXAoMiwgMiwgMyk7XG4gICAgcGMuYm9hcmQucGxhY2VTaGlwKDYsIDcsIDQpO1xuICAgIHBjLmJvYXJkLnBsYWNlU2hpcCg0LCA4LCAyKTtcblxuICAgIHJlbmRlckJvYXJkKHBsYXllck9uZSwgcGMpO1xuICB9XG4gIHBsYWNlU2hpcHMoKTtcbiAgcmV0dXJuIHsgcGxheWVyT25lLCBwYyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lKCk7XG4iXSwibmFtZXMiOlsiYm9hcmQiLCJzaGlwcyIsIm1pc3NlZEhpdCIsInBsYWNlU2hpcCIsIngiLCJ5IiwibGVuZ3RoIiwiYWxlcnQiLCJzaGlwIiwic2hpcGxlbmd0aCIsInRwIiwiY29vcmRzIiwiaSIsInB1c2giLCJoaXQiLCJpc1N1bmsiLCJyZWNlaXZlQXR0YWNrIiwiaiIsImNvbnNvbGUiLCJsb2ciLCJzdW5rU2hpcHMiLCJwbGFjZWRTaGlwcyIsImF0dGFjayIsInJlbmRlckJvYXJkIiwicGxheWVyIiwiZW5lbXkiLCJwbGF5ZXJEaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGNEaXYiLCJpbm5lckhUTUwiLCJlbmVteUJvYXJkIiwicmVuZGVyIiwiY29udGFpbmVyIiwiZm9yRWFjaCIsInJvdyIsImluZGV4IiwiY2VsbCIsImluZGV4MiIsImNlbGxEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwicGxheWVyT25lIiwicGMiXSwic291cmNlUm9vdCI6IiJ9