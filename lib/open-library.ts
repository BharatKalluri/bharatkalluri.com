import { BookData, BookDataValidator } from "../types";
import decodeWith from "../utils/ioTsUtils";

const CURRENTLY_READING_ISBNS = [
    "1101904224" // dark matter
];

const getCoverUrlFromId = (id: number) => {
    return `https://covers.openlibrary.org/b/id/${id}-L.jpg`;
};

export const getBookDataFromIsbn: (isbn: string) => Promise<BookData> = async (isbn: string) => {
    const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`, {
        method: "GET"
    });
    const responseJson = await response.json();
    const bookData = {
        title: responseJson.title,
        coverUrl: responseJson.covers?.length && responseJson.covers?.length > 0 ? getCoverUrlFromId(responseJson.covers[0]) : undefined
    };
    return decodeWith(BookDataValidator)(bookData);
};

export const getNowReading: () => Promise<BookData[]> = async () => {
    return await Promise.all(CURRENTLY_READING_ISBNS.map((isbn) => {
        return getBookDataFromIsbn(isbn);
    }));
};