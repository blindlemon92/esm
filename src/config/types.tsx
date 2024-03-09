export type rawVenue = {
	city: string;
	country: string;
	latitude: string;
	location: string;
	longitude: string;
	name: string;
	postal_code: string;
	region: string;
	street_address: string;
};

export type rawEvent = {
	artist: object;
	artist_id: string;
	bandsintown_plus: boolean;
	datetime: Date;
	datetime_display_rule: string;
	description: string;
	ends_at: Date;
	festival_end_date: string;
	festival_start_date: string;
	free: boolean;
	id: string;
	lineup: string[];
	offers: [];
	on_sale_datetime: string;
	sold_out: boolean;
	starts_at: Date;
	title: string;
	url: string;
	venue: rawVenue;
};

export type rawEventArray = rawEvent[];

export type formattedEventArray = string[][];
