// Please note this is sample data, we can replace this with our actual data, address, name details)
// const dataDetails = Array.from({ length: 100 }, (_, index) => ({
//   srNo: index + 1,
//   name: `Name ${index + 1}`,
//   address: `Address ${index + 1}`,
//   dataNumber: `data ${index + 1}`
// }));

const dataDetails = Array.from({ length: 100 }, (_, index) => ({
  srNo: index + 1,
  name: [
    "Antony",
    "Robert",
    "Steve",
    "Smith",
    "Larry",
    "Cecile",
    "Emile",
    "Vandie",
    "Brain",
    "Charles",
    "Amalie",
    "Edward",
    "Anderson",
  ][index % 13],
  address: `Street${index + 1}, City${index + 1}, Country${index + 1}`,
  dataNumber: `+1 555-555-${(index + 1).toString().padStart(2, "0")}`,
}));

// Constants for pagination
const datasPerPage = 10;
const totaldatas = dataDetails.length;
const totalPages = Math.ceil(totaldatas / datasPerPage);

// Initial page
let currentPage = 1;

// Function to display datas for the current page
function displaydatas() {
  const startIndex = (currentPage - 1) * datasPerPage;
  const endIndex = startIndex + datasPerPage;
  const datasToShow = dataDetails.slice(startIndex, endIndex);

  // Display datas in the table
  const tbody = document.querySelector("#table tbody");
  tbody.innerHTML = datasToShow
    .map(
      (data) => `
      <tr class="table-light">
        <th>${data.srNo}</th>
        <td>${data.name}</td>
        <td>${data.address}</td>
        <td>${data.dataNumber}</td>
      </tr>
    `
    )
    .join("");
}

// Function to update pagination buttons
function updateButtons() {
  const buttons = document.getElementById("buttons");
  buttons.innerHTML = `
      <button type="button" class="btn btn-primary" onclick="goToPage(1)"> First </button>
      <button type="button" class="btn btn-dark" onclick="goToPage(${
        currentPage - 1
      })" ${currentPage === 1 ? "disabled" : ""}> Previous </button>
      <span>Page ${currentPage} of ${totalPages}</span>
      <button type="button" class="btn btn-dark" onclick="goToPage(${
        currentPage + 1
      })" ${currentPage === totalPages ? "disabled" : ""}> Next </button>
      <button type="button" class="btn btn-primary" onclick="goToPage(${totalPages})"> Last </button>
    `;
}

// Function to navigate to a specific page
function goToPage(page) {
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    displaydatas();
    updateButtons();
  }
}

// Initial display
displaydatas();
updateButtons();
