import aw1 from '@mmstudio/aw000001';

export default function get<T>(mm: aw1, key: string, default_value: T) {
	const local = mm.data.local as { [key: string]: T };
	return (local && local[key]) || default_value;
}
