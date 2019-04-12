// Event listner that enables download on button click
const button = document.querySelector("#download");
button.addEventListener('click', (event) => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status === 200) {
      let blob = new Blob([xhr.response], {type: 'text/csv;charset=utf-8'});
      let url = URL.createObjectURL(blob);
      let link = document.createElement("a");
      link.style = "display: none";
      link.href = url;
      link.download = 'csvFile.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.log('Request failed');
    }
  }
  xhr.open('GET', '/csvFile');
  xhr.send(null);
});

// Refactor to single page app with ajax
