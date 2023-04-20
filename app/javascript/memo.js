function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const from = document.getElementById("from");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST","/posts",true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load',post);