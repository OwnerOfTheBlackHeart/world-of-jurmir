interface OrderedRecord<ID extends string | number | symbol, Value> {
	ids: ID[];
	values: Record<ID, Value>;
}
