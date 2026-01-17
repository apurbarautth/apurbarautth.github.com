
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const path = window.location.pathname.replace(/^\//, "");
  if (!path || path === "index.html") return;

  fetch("/content/" + path + ".html")
    .then(r => { if (!r.ok) throw Error(); return r.text(); })
    .then(html => {
      document.open();
      document.write(html);
      document.close();
    })
    .catch(() => {
      document.body.innerHTML = "<h1 style='text-align:center;margin-top:3rem'>404 – Content not found</h1>";
    });
})();
