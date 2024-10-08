import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import type { Columns, DraggableParams, Rows } from "../types";

export function reOrderList<C extends Columns>(
	event: DragEndEvent,
	items: Rows<C>,
): DraggableParams<C> | undefined {
	if (!event.over) return;

	if (event.active.id !== event.over.id) {
		const from = items.findIndex(
			(row) => event.active.id.toString() === row.key.toString(),
		);
		const to = items.findIndex(
			(row) => event.over?.id.toString() === row.key.toString(),
		);
		const result = arrayMove(items, from, to);

		return { from, to, rows: result };
	}
}
