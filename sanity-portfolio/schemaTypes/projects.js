export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
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
            name: 'image',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'githubLink',
            title: 'GitHub Link',
            type: 'url',
        },
    ],
};
