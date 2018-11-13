import { SortMeta } from './sortmeta';
import { FilterMetadata } from './filtermetadata';

export interface TableState {
    first?: number;
    rows?: number;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: SortMeta[];
    filters?: {[s: string]: FilterMetadata;};
}