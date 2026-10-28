export default {
	// the gray of a row that cannot be edited
	lockedColor: "#EEEEEE",

	// the row_ids of editable_rows as keys, built once instead of searching the list for every cell
	editableIds () {
		return Object.fromEntries((editable_random.data ?? []).map(r => [r.row_id, true]));
	},

	// true when the row can be edited
	isEditable (row) {
		return this.editableIds()[row.row_id] === true;
	},

	// the cell background: none when the row can be edited, gray when it cannot
	background (row) {
		return this.isEditable(row) ? "" : this.lockedColor;
	},
}
