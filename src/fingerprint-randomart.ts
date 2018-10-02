export const FLDBASE = 8;
export const FLDSIZE_Y = FLDBASE + 1;
export const FLDSIZE_X = FLDBASE * 2 + 1;
const HALF_X = Math.floor(FLDSIZE_X / 2);
const HALF_Y = Math.floor(FLDSIZE_Y / 2);

type Field<T> = T[][];

function getField <T>(size_x: number, size_y: number, init_value: T): Field<T> {
	const result = [];
	for (let x = 0; x < size_x; x++) {
		const row = [];
		for (let y = 0; y < size_y; y++) {
			row.push(init_value);
		}
		result.push(row);
	}
	return result;
}

/** @see https://github.com/openssh/openssh-portable/blob/77199d6ec8986d470487e66f8ea8f4cf43d2e20c/sshkey.c#L1044 */
export function fingerprintRandomart (dgst_raw: string, augmentation_string: string = ' .o+=*BOX@%&#/^SE') {
	const dgst_raw_len = dgst_raw.length;
	const field = getField(FLDSIZE_X, FLDSIZE_Y, 0);
	const len = augmentation_string.length - 1;

	let retval = '';
	let x = HALF_X;
	let y = HALF_Y;

	for (let i = 0; i < dgst_raw_len; i += 2) {
		let input = parseInt(dgst_raw[i] + dgst_raw[i + 1], 16);
		for (let b = 0; b < 4; b++) {
			x += (input & 0x1) ? 1 : -1;
			y += (input & 0x2) ? 1 : -1;

			x = Math.max(x, 0);
			y = Math.max(y, 0);
			x = Math.min(x, FLDSIZE_X - 1);
			y = Math.min(y, FLDSIZE_Y - 1);

			if (field[x][y] < len - 2) {
				field[x][y]++;
			}

			input = input >> 2;
		}
	}

	field[HALF_X][HALF_Y] = len - 1;
	field[x][y] = len;

	for (y = 0; y < FLDSIZE_Y; y++) {
		for (x = 0; x < FLDSIZE_X; x++) {
			retval += augmentation_string[Math.min(field[x][y], len)];
		}
		retval += '\n';
	}

	return retval;
}

export function fingerprintRandomartFrame (frame_index: number, dgst_raw: string, augmentation_string: string = ' .o+=*BOX@%&#/^SE') {
	const dgst_raw_len = dgst_raw.length;
	const field = getField(FLDSIZE_X, FLDSIZE_Y, 0);
	const len = augmentation_string.length - 1;
	let cursor = 0;

	let retval = '';
	let x = HALF_X;
	let y = HALF_Y;

	outer: for (let i = 0; i < dgst_raw_len; i += 2) {
		let input = parseInt(dgst_raw[i] + dgst_raw[i + 1], 16);
		for (let b = 0; b < 4; b++) {
			if (cursor++ >= frame_index) {
				break outer;
			}

			x += (input & 0x1) ? 1 : -1;
			y += (input & 0x2) ? 1 : -1;

			x = Math.max(x, 0);
			y = Math.max(y, 0);
			x = Math.min(x, FLDSIZE_X - 1);
			y = Math.min(y, FLDSIZE_Y - 1);

			if (field[x][y] < len - 2) {
				field[x][y]++;
			}

			input = input >> 2;
		}
	}

	field[HALF_X][HALF_Y] = len - 1;
	field[x][y] = len;

	for (let y = 0; y < FLDSIZE_Y; y++) {
		for (let x = 0; x < FLDSIZE_X; x++) {
			retval += augmentation_string[Math.min(field[x][y], len)];
		}
		retval += '\n';
	}

	return {
		retval,
		x,
		y,
	};
}
