export interface Job {
    id: number;
    url: string;
    html_url: string;
    title: string;
    state: string;
    labels: Array<any>;
    created_at: string;
    body: string;
}
