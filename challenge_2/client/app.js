console.log('App.js is properly linked to index.html!');

// #1 Attach event listner to button
const button = document.querySelector("button");
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
// #2 Refactor form to use FilePicker

// #3 Refactor to single page app with ajax

// #4 Add button functionality to download latest CSV Report