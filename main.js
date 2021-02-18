(()=>{"use strict";const e=[];function t(e,t){const n=document.createElement("div");n.className=`alert alert-${t}`,n.textContent=e;const a=document.querySelector(".container"),o=document.querySelector("#newBookForm");return a.insertBefore(n,o),setTimeout((()=>document.querySelector(".alert").remove()),3e3),!1}const{newBookForm:n}=document.forms;function a(e,t,n,a){this.author=e,this.title=t,this.pages=n,this.read=a}document.querySelector("#form-button").onclick=()=>{const o=n.querySelector('input[name="title"').value,c=n.querySelector('input[name="author"').value,r=n.querySelector('input[name="pages"').value;let d;if(d=n.querySelectorAll('input[name="read"]')[0].checked?"Read":"Not Read",""===o||""===c||parseInt(r,10)<1)t("Invalid input","danger");else{const n=new a(o,c,r,d);(t=>{const n=document.querySelector("#book-group"),a=document.createElement("div");a.className="card m-2";const o=document.createElement("div");o.className="card-body";const c=document.createElement("p");c.className="card-title";const r=document.createElement("h5");r.className="card-text";const d=document.createElement("p");d.className="card-text";const s=document.createElement("p");s.className="card-text read-status",c.textContent=t.title,r.textContent=t.author,d.textContent=`${t.pages} Pages`,s.textContent=t.read,o.appendChild(r),o.appendChild(c),o.appendChild(d),o.appendChild(s),a.appendChild(o),((e,t)=>{const n=document.createElement("button");n.addEventListener("click",(()=>{const n=t.querySelector(".read-status");"Read"===e.read?(n.textContent="Not Read",e.read="Not Read"):(n.textContent="Read",e.read="Read")})),n.textContent="Toggle status",n.setAttribute("class","btn btn-success"),t.appendChild(n)})(t,a),((t,n)=>{const a=document.createElement("button");a.addEventListener("click",(()=>{n.parentNode.removeChild(n),-1!==e.indexOf(t)&&e.splice(e.indexOf(t),1)})),a.textContent="Delete",a.setAttribute("class","btn btn-danger mr-2 ml-3"),n.appendChild(a)})(t,a),n.appendChild(a)})(n),s=n,e.push(s),t("Book added!","success")}var s;return!1}})();