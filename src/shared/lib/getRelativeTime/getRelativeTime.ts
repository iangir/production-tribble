export const getRelativeTime = (date: Date | number, locale: string) => {
	const timeMs = typeof date === 'number' ? date : date.getTime();
	const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

	const cutoffs = [
		60,
		3600,
		86400,
		86400 * 7,
		86400 * 30,
		86400 * 365,
		Infinity,
	];

	const units: Intl.RelativeTimeFormatUnit[] = [
		'second',
		'minute',
		'hour',
		'day',
		'week',
		'month',
		'year',
	];

	const index = cutoffs.findIndex(
		(cutoff) => cutoff > Math.abs(deltaSeconds),
	);

	const divisor = index ? cutoffs[index - 1] : 1;

	const rtf = new Intl.RelativeTimeFormat(locale, {
		numeric: 'auto',
		style: 'short',
	});
	return rtf.format(Math.floor(deltaSeconds / divisor), units[index]);
};
