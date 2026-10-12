import { slugify } from "./slugify";

const STATUS_LABELS = {
    open: "Open",
    temporarily_closed: "Temporarily closed",
    permanently_closed: "Permanently closed",
};

const DIETARY_LABELS = {
    fully_vegan: "Fully vegan",
    vegetarian: "Vegetarian",
    vegan_options: "Vegan options (serves meat or fish)",
};

const knownValue = (labels, value) =>
    typeof value === "string" && Object.hasOwn(labels, value) ? value : null;

/** Add migration fields without changing legacy values or inferring verification. */
export function normalizeRestaurant(restaurant) {
    return {
        ...restaurant,
        status: knownValue(STATUS_LABELS, restaurant.status),
        dietary: knownValue(DIETARY_LABELS, restaurant.dietary),
        cuisines: Array.isArray(restaurant.cuisines)
            ? [...restaurant.cuisines]
            : Object.hasOwn(restaurant, "cuisines")
              ? []
              : (restaurant.cuisine || "").split(",").map((c) => c.trim()).filter(Boolean),
        locationSlug: Object.hasOwn(restaurant, "locationSlug")
            ? restaurant.locationSlug
            : restaurant.location ? slugify(restaurant.location) : null,
        isCityCentre: Object.hasOwn(restaurant, "isCityCentre")
            ? typeof restaurant.isCityCentre === "boolean" ? restaurant.isCityCentre : null
            : restaurant.centre?.toLowerCase() === "yes" ? true
              : restaurant.centre?.toLowerCase() === "no" ? false : null,
    };
}

export function normalizeRestaurants(restaurants) {
    return restaurants.map(normalizeRestaurant);
}

export function getStatusLabel(status) {
    return STATUS_LABELS[knownValue(STATUS_LABELS, status)] || "Status not verified";
}

export function getDietaryLabel(dietary) {
    return DIETARY_LABELS[knownValue(DIETARY_LABELS, dietary)] || "Dietary classification not verified";
}

/** Checks are append-only: the last check for a field supersedes earlier checks. */
export function isFieldVerified(restaurant, field) {
    const checks = restaurant.verification?.checks;
    if (!Array.isArray(checks)) return false;

    const check = checks.filter((entry) =>
        Array.isArray(entry?.fields) && entry.fields.includes(field)
    ).at(-1);
    if (check?.result !== "confirmed" || !/^\d{4}-\d{2}-\d{2}$/.test(check.checkedAt)) return false;

    const date = new Date(`${check.checkedAt}T00:00:00Z`);
    if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== check.checkedAt) return false;

    return Array.isArray(check.sources) && check.sources.some((source) => {
        try {
            const url = new URL(source);
            return url.protocol === "https:" || url.protocol === "http:";
        } catch {
            return false;
        }
    });
}

export function isConfirmedOpen(restaurant) {
    return restaurant.status === "open" && isFieldVerified(restaurant, "status");
}

export function isFullyVegan(restaurant) {
    return restaurant.dietary === "fully_vegan" && isFieldVerified(restaurant, "dietary");
}

/** Unknown and temporary statuses remain eligible, but are never confirmed open. */
export function getActiveRestaurants(restaurants) {
    return restaurants.filter((restaurant) => restaurant.status !== "permanently_closed");
}

/** Confirmed dietary classification only; callers can also filter by isConfirmedOpen. */
export function getVeganRestaurants(restaurants) {
    return getActiveRestaurants(restaurants).filter(isFullyVegan);
}
