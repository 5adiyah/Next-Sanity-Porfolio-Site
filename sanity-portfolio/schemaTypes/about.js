export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'cta',
            title: 'Call to Action',
            type: 'object',
            fields: [
                { name: 'link', title: 'Link', type: 'url' },
                { name: 'linkText', title: 'Link Text', type: 'string' },
            ],
        },
    ],
};
