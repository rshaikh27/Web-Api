async function getData() {
  const res = await fetch("https://fakerapi.it/api/v1/companies");
  const data = await res.json();
  const companies = data.data;
  setCompanies(companies);
}

function setCompanies(companies) {
  const table = document.getElementById("companiesTable");
  let tableDataHtml = "";
  companies.forEach((company) => {
    const tableData = `
          <tr>
              <td>${company.id}</td>
              <td>${company.name}</td>
              <td>${company.email}</td>
              <td>${company.phone}</td>
              <td>${company.vat}</td>
              <td>${company.website}</td>
              <td>
                  <img src="${company.image}" />
              </td>
              <td>${company.country}</td>
          </tr>
      `;
    tableDataHtml += tableData;
  });
  table.innerHTML = table.innerHTML + tableDataHtml;

 
}

window.onload = getData;
