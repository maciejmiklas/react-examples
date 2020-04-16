import C from "./constants";
import {v4} from 'uuid'

export const removeColor = id => ({
    type: C.REMOVE_COLOR,
    id
});

export const rateColor = (id, rating) => ({
    type: C.RATE_COLOR,
    id,
    rating
});

export const sortColors = sortedBy => (sortedBy === "rating") ?
    ({
        type: C.SORT_COLORS, sortBy: "SORTED_BY_RATING"
    }) :
    (sortedBy === "title") ?
        ({
            type: C.SORT_COLORS, sortBy: "SORTED_BY_TITLE"
        }) : ({
            type: C.SORT_COLORS,
            sortBy: "SORTED_BY_DATE"
        });

export const addColor = (title, color) => (
    {
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()
    }
);

const sortBy = (type, field) => {
    switch (type) {
        case "date" :
            return (a, b) => new Date(b[field]) - new Date(a[field]);
        case "string" :
            return (a, b) => (a[field] < b[field]) ? -1 : 1;
        default:
            return (a, b) => b[field] - a[field];
    }
}

export const sortFunction = sort =>
    (sort === "SORTED_BY_TITLE") ?
        sortBy("string", "title") :
        (sort === "SORTED_BY_RATING") ?
            sortBy("number", "rating") :
            sortBy("date", "timestamp")