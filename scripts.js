document.addEventListener('DOMContentLoaded', function () {
    const filterIcons = document.querySelectorAll('.filter-icon');
    const filterDropdowns = document.querySelectorAll('.filter-dropdown');
    const filterSelects = document.querySelectorAll('.filter-select');
    const table = document.getElementById('filterTable');
    const tbody = table.querySelector('tbody');
  
    filterIcons.forEach((icon, index) => {
      icon.addEventListener('click', function () {
        const dropdown = filterDropdowns[index];
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    filterSelects.forEach((select, index) => {
      select.addEventListener('change', function () {
        const filterValue = select.value.toLowerCase();
        const rows = tbody.getElementsByTagName('tr');
  
        for (let i = 0; i < rows.length; i++) {
          const cells = rows[i].getElementsByTagName('td');
          const cell = cells[index];
          const cellText = cell.textContent || cell.innerText;
  
          if (filterValue === "" || cellText.toLowerCase() === filterValue) {
            rows[i].style.display = '';
          } else {
            rows[i].style.display = 'none';
          }
        }
        filterDropdowns[index].style.display = 'none';
      });
    });
  
    document.addEventListener('click', function (event) {
      filterIcons.forEach((icon, index) => {
        const dropdown = filterDropdowns[index];
        if (!icon.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.style.display = 'none';
        }
      });
    });
  });
  