export default function currentTime(){let e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds(),u="AM";return 0===t&&(t=12),t>12&&(t-=12,u="PM"),t=t<10?"0"+t:t,n=n<10?"0"+n:n,r=r<10?"0"+r:r,t+":"+n+":"+r+" "+u}