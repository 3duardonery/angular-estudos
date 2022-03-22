import { Job } from "./job";

export interface JobResult {
    total_count: number;
    incomplete_results: boolean;
    items: Job[];
}
