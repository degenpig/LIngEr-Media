export const price = [{
    type: "Billed yearly",
    free: 0,
    pro: '$4 per month',
    business: '$6 per member per month',
},
{
    type: "Billed monthly",
    free: 0,
    pro: '$5 per month',
    business: '$8 per member per month',
}
];

export const usage = [{
    type: "Active (non-archived) projects",
    free: 5,
    pro: 300,
    business: '500 per member',
},
{
    type: "Active tasks per project",
    free: 300,
    pro: 300,
    business: 300,
},
{
    type: "Active sections per project",
    free: '20',
    pro: '20',
    business: '20',
},
{
    type: "Collaborators per project",
    free: '5',
    pro: '25',
    business: '50',
},
{
    type: "File uploads",
    free: '5 MB',
    pro: '100 MB',
    business: '100 MB',
},
{
    type: "Filter views",
    free: 3,
    pro: '150',
    business: '150 per member',
},
{
    type: "Activity history",
    free: '1 week',
    pro: 'Unlimited',
    business: 'Unlimited',
},
];

export const features = [
    {
        type: "Reminders",
        free: false,
        pro: true,
        business: true,
    },
    {
        type: "Due dates",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Priorities",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Comments",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Labels",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Integrations",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Completed tasks archive",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Shared team inbox",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Add tasks via email",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Calendar sync",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Templates",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Productivity trends",
        free: true,
        pro: true,
        business: true,
    },
    {
        type: "Themes",
        free: false,
        pro: true,
        business: true,
    },
    {
        type: "Automatic backups",
        free: false,
        pro: true,
        business: true,
    },
]

export const collaboration = [
    {
        type: "Shared team inbox",
        free: false,
        pro: false,
        business: true,
    },
]

export const adminsecurity = [
    {
        type: "Admin & member roles",
        free: false,
        pro: false,
        business: true,
    },
    {
        type: "Team billing",
        free: false,
        pro: false,
        business: true,
    },
]