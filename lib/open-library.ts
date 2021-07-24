import { BookData, BookDataValidator } from "../types";
import decodeWith from "../utils/ioTsUtils";

interface OLWork {
    cover_edition_key?: string;
    title: string;
    key: string;
}

const getCoverUrlFromId = (id: string) => {
    return `https://covers.openlibrary.org/b/olid/${id}-L.jpg`;
};

export const getBookDataFromId = async (el: { work: OLWork }) => {
    const coverEditionKey = el?.work?.cover_edition_key;
    const title = el.work.title;
    const editionKey = el?.work.key;
    const bookData = {
        title: title,
        coverUrl: coverEditionKey ? getCoverUrlFromId(coverEditionKey) : undefined,
        url: `https://openlibrary.org${editionKey}`,
    };
    return decodeWith(BookDataValidator)(bookData);
};

export const getNowReading: () => Promise<BookData[]> = async () => {
    const currentlyReadingRaw = await fetch(
        `https://openlibrary.org/people/bharatkalluri/books/currently-reading.json`
    );
    const currentlyReadingJson = await currentlyReadingRaw.json();
    const currentlyReadingArr: Array<any> = currentlyReadingJson?.reading_log_entries;
    return await Promise.all(
        currentlyReadingArr.map((el: { work: OLWork }) => {
            return getBookDataFromId(el);
        })
    );
};
