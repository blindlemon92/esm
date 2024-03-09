import { rawEventArray } from './types';

export const formatDatetime = (gigDateTime: Date) => {
	return gigDateTime.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};

export const formatDates = (dates: rawEventArray) => {
	console.log(dates);
	const formattedDates = dates.map((i) => [
		formatDatetime(new Date(i.datetime)),
		i.venue.location,
		i.venue.name,
	]);
	return formattedDates;
};
