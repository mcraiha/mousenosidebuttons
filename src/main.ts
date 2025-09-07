export function sortTable(tableId: string, columnIndex) {

    const table = document.getElementById(tableId)! as HTMLTableElement;
    const rows = table.tBodies[0].rows;

    let arr = Array.from(rows);
    let sortedRows = arr.sort((a, b) => {
        let cellA = a.cells[columnIndex].innerText;
        let cellB = b.cells[columnIndex].innerText;
        return cellA.localeCompare(cellB);
    });

    sortedRows.forEach(row => table.tBodies[0].appendChild(row));
}

const sorters: readonly string[] = ["maker", "model", "buttonamount", "sidebuttons", "ambidextrous", "weight", "price"];

sorters.forEach((value, index) => {
    document.getElementById(value)!.addEventListener("click", function() {
      sortTable("current", index)
    });
});
