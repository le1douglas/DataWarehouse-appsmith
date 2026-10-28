export default {
	// the gray of a cell that cannot be edited, one place for every column
	lockedColor: "#EEEEEE",

	// true when the row's type can be edited. for now a stable 50/50 on the last hex digit of row_id
	isEditable (row) {
		return parseInt(row.row_id.slice(-1), 16) % 2 === 0;
	},

	// the cell background: none when the row is editable, gray when it is not
	background (row) {
		return this.isEditable(row) ? "" : this.lockedColor;
	},
}
