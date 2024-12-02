console.log('Hello World!');

function ready1()
{
  let ready_b = document.getElementById("p1b");
  let p1 = document.getElementById("p1");
  let starter = document.getElementById("starter1");
  ready_b.setAttribute("disabled","");
  ready_b.style.backgroundColor = "#8C8EAD";
  p1.classList.add("p2change");
  starter.classList.add("starterchange1");
}

function ready2()
{
  let ready_b = document.getElementById("p2b");
  let p2 = document.getElementById("p2");
  let starter = document.getElementById("starter2");
  ready_b.setAttribute("disabled","");
  ready_b.style.backgroundColor = "#8C8EAD";
  p2.classList.add("p2change");
  starter.classList.add("starterchange2");
}

let x=0,y,score = -1,counter = -1;

function answer()
{
  let qfirst = document.getElementById("q" +(x+1));
  if(x == 0)
  {
    let fight = document.getElementById("fight2");
    qfirst.classList.add("q2change");
    fight.style.visibility = "hidden ";
    y = 1;
    x+=1;
  }
  else 
  {
    
    if (y == 1) 
     {
       qfirst.classList.remove("q2change");
     }
    x = generate(x);
    console.log(x);
    console.log(y); 
    let qy = document.getElementById("q" +y);
  let qx = document.getElementById("q" + x);
    qy.classList.remove("q2change");
    qx.classList.add("q2change");
    y = x;
  }
  score++;
  if(counter >= 9)
    {
      result();
      let qy = document.getElementById("q" +y);
      qy.classList.remove("q2change");
      return 0;
    }
  console.log("score = " + score);
  counter++;
}

function generate(x)
{
  let min = 1, max = 13;
  let random; 
  for (var i = 0; i >= 0; i++)
  {
    random = Math.floor(Math.random()* (max-min+1))+min;
    if(random === x )
    {continue;}
    else
    {break ;}
  }
  return random;
}

function wrong()
{
  let qfirst = document.getElementById("q" +(x+1));
  if(x == 0)
  {
    let fight = document.getElementById("fight2");
    qfirst.classList.add("q2change");
    fight.style.visibility = "hidden ";
    y = 1;
    x+=1;
  }
  else 
  {
    if(counter >= 9)
    {
      result();
      let qy = document.getElementById("q" +y);
      qy.classList.remove("q2change");
      return 0;
    }
    if (y == 1) 
     {
       qfirst.classList.remove("q2change");
     }
    x = generate(x);
    console.log(x);
    console.log(y); 
    let qy = document.getElementById("q" +y);
  let qx = document.getElementById("q" + x);
    qy.classList.remove("q2change");
    //qy.style.opacity = "0%";
    qx.classList.add("q2change");
    y = x;
  }
  counter++;
}

let a=0,b,score1 = -1,counter1 = -1;

function answer1()
{
  let qfirst = document.getElementById("qq" +(a+1));
  if(a == 0)
  {
    let fight = document.getElementById("fight1");
    qfirst.classList.add("q2change");
    qfirst.style.rotate = "180deg";
    fight.style.visibility = "hidden ";
    b = 1;
    a+=1;
  }
  else 
  {
    
    if (b == 1) 
     {
       let qfirst = document.getElementById("qq" + b);
       qfirst.classList.remove("q2change");
     }
    a = generate1(a);
    console.log(x);
    console.log(y); 
    let qy = document.getElementById("qq" +b);
  let qx = document.getElementById("qq" + a);
    qy.classList.remove("q2change");
    qx.classList.add("q2change");
    qx.style.rotate = "180deg";
    b = a;
  }
  score1++;
  if(counter1 >= 9)
    {
      result1();
      let qy = document.getElementById("qq" +b);
      qy.classList.remove("q2change");
      return 0;
    }
  console.log("score = " + score);
  counter1++;
}

function wrong1()
{
  let qfirst = document.getElementById("qq" +(a+1));
  if(a == 0)
  {
    let fight = document.getElementById("fight1");
    qfirst.classList.add("q2change");
    qfirst.style.rotate ="180deg";
    fight.style.visibility = "hidden ";
    b = 1;
    a+=1;
  }
  else 
  {
    if(counter1 >= 9)
    {
      result1();
      let qy = document.getElementById("qq" +b);
      qy.classList.remove("q2change");
      return 0;
    }
    if (b == 1) 
     {
       qfirst.classList.remove("q2change");
     }
    a = generate1(a);
    console.log(x);
    console.log(y); 
    let qy = document.getElementById("qq" + b);
  let qx = document.getElementById("qq" + a);
    qy.classList.remove("q2change");
    qx.classList.add("q2change");
    qx.style.rotate = "180deg";
    b = a;
  }
  counter1++;
}

function generate1(x)
{
  let min = 1, max = 13;
  let random; 
  for (var i = 0; i >= 0; i++)
  {
    random = Math.floor(Math.random()* (max-min+1))+min;
    if(random === x )
    {continue;}
    else
    {break ;}
  }
  return random;
}

let player1 = document.getElementById("player2");
let player2 = document.getElementById("player1");
function result() 
{
  let prog = document.getElementById("progres");
  let congra = document.getElementById("congra");
  let message = document.getElementById("message");
  let name = document.getElementById("namec");
  name.innerHTML = player1.value;
  if(score >= 7)
  {
    if(score == 10)
  {
    message.classList.add("messagechange");
    congra.classList.add("congrachange");
    message.innerHTML = "🥳YOU DID IT🥳";
  }
  else
  {
    congra.style.backgroundColor = "Green";
    message.innerHTML = "Nice job😉";
  }
  }
  else if(score >= 5)
  {
    congra.style.backgroundColor = "Blue";
    message.innerHTML = "Good job👍";
  }
  else if(score >= 3)
  {
    congra.style.backgroundColor = "yellow";
    message.innerHTML = "work hard😕";
  }
  else 
  {
    congra.style.backgroundColor = "Red";
    message.innerHTML = "GO STUDY!!!😳";
  }
  prog.value = (score*10);
  congra.style.visibility = "visible";
}

function result1() 
{
  let prog = document.getElementById("progres1");
  let congra = document.getElementById("congra1");
  let message = document.getElementById("message1");
  let name = document.getElementById("namec1");
  name.innerHTML = player2.value;
  if(score1 >= 7)
  {
    if(score1 == 10)
  {
    message.classList.add("messagechange");
    congra.classList.add("congrachange");
    message.innerHTML = "🥳YOU DID IT🥳";
  }
  else
  {
    congra.style.backgroundColor = "Green";
    message.innerHTML = "Nice job😉";
  }
  }
  else if(score1 >= 5)
  {
    congra.style.backgroundColor = "Blue";
    message.innerHTML = "Good job👍";
  }
  else if(score1 >= 3)
  {
    congra.style.backgroundColor = "yellow";
    message.innerHTML = "work hard😕";
  }
  else 
  {
    congra.style.backgroundColor = "Red";
    message.innerHTML = "GO STUDY!!!😳";
  }
  prog.value = (score1*10);
  congra.style.visibility = "visible";
}
