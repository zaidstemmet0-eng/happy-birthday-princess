const m=`My beautiful Princess,

**To My Beautiful Princess,** ❤️

Happy Birthday.

Today is all about celebrating someone who means more to me than she'll probably ever realize. I hope this year brings you happiness that lasts, peace in your heart, good health, success in everything you do, and countless moments that make you smile.

You've become someone incredibly special in my life. Your kindness, your heart, your smile, and the way you make people feel are just a few of the many things I admire about you. You have a way of making ordinary moments feel unforgettable, and I'm genuinely grateful to know you.

I hope you never forget how amazing you are. Even on the days when you doubt yourself, I hope you remember that there's someone out there who sees just how incredible you truly are.

You deserve to be celebrated today and every day, because the world is a better place with you in it.

Thank you for simply being you.

Happy Birthday, Princess. I hope today is filled with love, laughter, beautiful memories, and everything your heart wishes for.

No matter where life takes us, you'll always have a very special place in my heart.

Have the most amazing birthday. ❤️
 ❤️`;let i=0;function t(){if(i<m.length){type.textContent+=m[i++];setTimeout(t,28)}}t();const c=document.getElementById('c'),x=c.getContext('2d');function r(){c.width=innerWidth;c.height=innerHeight}r();onresize=r;let hearts=[];setInterval(()=>hearts.push({x:Math.random()*c.width,y:c.height,s:10+Math.random()*20}),120);function a(){x.clearRect(0,0,c.width,c.height);hearts.forEach(h=>{x.font=h.s+'px serif';x.fillText('❤️',h.x,h.y);h.y-=1.5});hearts=hearts.filter(h=>h.y>-20);requestAnimationFrame(a)}a();