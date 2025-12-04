(() => {
  const productInput = document.getElementById('productInput');
  const addProductBtn = document.getElementById('addProductBtn');
  const productList = document.getElementById('productList');


  function createListItem(name) {
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    nameSpan.className = 'product-name';
    nameSpan.textContent = name;

    const controls = document.createElement('div');
    controls.className = 'controls';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('data-action', 'edit');

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('data-action', 'delete');

    controls.appendChild(editBtn);
    controls.appendChild(deleteBtn);
    li.appendChild(nameSpan);
    li.appendChild(controls);
    return li;
  }


  addProductBtn.addEventListener('click', () => {
    const value = productInput.value.trim();
    if (!value) return;
    productList.appendChild(createListItem(value));
    productInput.value = '';
    productInput.focus();
  });


  productList.addEventListener('click', (ev) => {
    const action = ev.target.getAttribute('data-action');
    if (!action) return;
    const li = ev.target.closest('li');
    if (!li) return;

    if (action === 'delete') {
      li.remove();
      return;
    }

    if (action === 'edit') {
      enterEditMode(li);
    }
  });


  document.addEventListener('click', (ev) => {
    const editing = productList.querySelector('.editing');
    if (!editing) return;
    if (!editing.contains(ev.target)) saveEdit(editing);
  });


  productList.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      const li = ev.target.closest('li');
      if (li) saveEdit(li);
    }
    if (ev.key === 'Escape') {
      const li = ev.target.closest('li');
      if (li) cancelEdit(li);
    }
  });

  function enterEditMode(li) {
    if (!li || li.classList.contains('editing')) return;
    const span = li.querySelector('.product-name');
    const previous = span.textContent;
    li.dataset.previous = previous;
    const input = document.createElement('input');
    input.value = previous;
    input.style.flex = '1';
    li.insertBefore(input, span);
    li.removeChild(span);
    li.classList.add('editing');
    input.focus();
  }

  function saveEdit(li) {
    if (!li || !li.classList.contains('editing')) return;
    const input = li.querySelector('input');
    const newVal = input.value.trim() || li.dataset.previous || '';
    const span = document.createElement('span');
    span.className = 'product-name';
    span.textContent = newVal;
    li.insertBefore(span, input);
    li.removeChild(input);
    li.classList.remove('editing');
    delete li.dataset.previous;
  }

  function cancelEdit(li) {
    if (!li || !li.classList.contains('editing')) return;
    const previous = li.dataset.previous || '';
    const input = li.querySelector('input');
    const span = document.createElement('span');
    span.className = 'product-name';
    span.textContent = previous;
    li.insertBefore(span, input);
    li.removeChild(input);
    li.classList.remove('editing');
    delete li.dataset.previous;
  }
})();
