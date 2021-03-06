export interface Task {
    id: number;
    title: string;
    description: string;
    status?: boolean;
    created_at: string;
    finishTo?: string;
}
//=====================================
//  Layout: for the future
//-------------------------------------
export const UrgencyMap: Object[] = [
    {
        code: 'warn',
        name: 'Высокий'
    },
    {
        code: 'primary',
        name: 'Средний'
    },
    {
        code: 'accent',
        name: 'Низкий'
    },
];

// срочность кастомный тип
export const enum Urgency {
    High,
    Middle,
    Low
}

