export default {
	// the corrections table of the selected candidate table: cand_x becomes corr_x
		// the corrections table of the selected dataset: journal_entries becomes corr_journal_entries
	corrTable() {
		return "corr_" + sel_dataset.selectedOptionValue;
	},

	// the candidate table of the selected dataset: journal_entries becomes cand_journal_entries
	candTable() {
		return "cand_" + sel_dataset.selectedOptionValue;
	},

		// the row_id of the row in the form
	rowId() {
		return form_row.formData.row_id;
	},

	// the row as submitted in the form, as json text. every text value is trimmed, and an empty one is null
	formJson() {
		return JSON.stringify(
			_.mapValues(form_row.formData, v => {
				if (typeof v !== "string") return v;
				const trimmed = v.trim();
				return trimmed === "" ? null : trimmed;
			})
		);
	}

}
