const time = document.getElementsByClassName("time")[0];
const days = document.getElementsByClassName("days")[0].children;
const date = document.getElementsByClassName("month")[0].children;
const dname = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const mname = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

function update(rate) {
  setTimeout(function() {
    const now = new Date();
    let dates = ("0" + now.getDate()).slice(-2);
    let minute = ("0" + now.getMinutes()).slice(-2);
    let second = ("0" + now.getSeconds()).slice(-2);
    let hour = now.getHours();
    hour = (hour % 12) ? ("0" + (hour % 12)).slice(-2):12;
    time.textContent = `${hour}:${minute}`;
    date[0].textContent = dates;
    date[1].textContent = mname[now.getMonth()];
    date[2].textContent = now.getFullYear();
    date[3].textContent = '.' + second;
    days[7].textContent = (now.getHours() >= 12) ? 'PM':'AM';
    
    for(let i = 0;i < dname.length;i++) {
      days[i].textContent = dname[i];
      days[i].style.color = (i == now.getDay()) ? 'white':'rgba(255, 255, 255, 0.1';
    }
    
    update(1000);
  }, rate);
}

update(0);
