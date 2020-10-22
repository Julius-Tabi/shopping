import { Url } from 'url';

export interface Note {
    
    id?: any;
    title: string;
    content: string;
    createdAt: any;
    downloadurl:Url;
}
