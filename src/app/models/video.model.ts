export interface Video {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    regionCode:    string;
    pageInfo:      PageInfo;
    items:         Item[];
}

export interface Item {
    kind:    string;
    etag:    string;
    id:      ID;
    snippet: Snippet;
}

export interface ID {
    kind:    string;
    videoId: string;
}

export interface Snippet {
    publishedAt:          string;
    channelId:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    liveBroadcastContent: string;
}

export interface Thumbnails {
    default: Default;
    medium:  Default;
    high:    Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}

// Converts JSON strings to/from your types
export module Convert {
    export function toVideo(json: string): Video {
        return JSON.parse(json);
    }

    export function videoToJson(value: Video): string {
        return JSON.stringify(value, null, 2);
    }
}
