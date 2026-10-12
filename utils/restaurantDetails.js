import { isFieldVerified } from "./restaurants";

export function getVerifiedHours(restaurant, scope) {
    if (restaurant.status === "permanently_closed") return [];
    const schedule = restaurant.openingHours?.[scope];
    if (!schedule) return [];
    return Object.entries(schedule).filter(([day, intervals]) => {
        if (!Array.isArray(intervals)) return false;
        const field = `openingHours.${scope}.${day}`;
        const hasDayCheck = restaurant.verification?.checks?.some((check) => check.fields?.includes(field));
        return isFieldVerified(restaurant, hasDayCheck ? field : `openingHours.${scope}`);
    }).map(([day, intervals]) => ({
        day: day[0].toUpperCase() + day.slice(1),
        hours: intervals.length === 0 ? "Closed" : intervals.map((interval) =>
            `${interval.opens}–${interval.closes}${interval.closesNextDay ? " (next day)" : ""}`
        ).join(", "),
    }));
}
