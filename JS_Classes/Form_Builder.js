"use strict";

class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }
  render(containerId) {
    const container = document.getElementById(containerId);
    let html = "<form id='dynamicForm'>";
    this.fields.forEach(f => {
      html += `<label>${f.label}<input type='${f.type}' name='${f.label}'></label><br>`;
    });
    html += "<button type='button' onclick='getFormData()'>Submit</button></form>";
    container.innerHTML = html;
  }
}

function getFormData() {
  const form = document.getElementById("dynamicForm");
  const data = {};
  [...form.elements].forEach(e => {
    if (e.name) data[e.name] = e.value;
  });
  console.log(data);
}
