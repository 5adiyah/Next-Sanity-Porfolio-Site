export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'service',
            title: 'Service',
            type: 'string',
        },
        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            description: 'Choose a background color.',
            options: {
                list: [
                    { title: 'Galactic Blue', value: '#755CDE' },
                    { title: 'Summer Yellow', value: '#F6A560' },
                    { title: 'Soft Coral', value: '#F39E9E' },
                    { title: 'Scarlet Red', value: '#EB7565' },
                    { title: 'Seafoam Green', value: '#61C4B7' },
                    { title: 'Grape Jam', value: '#552049' },
                ],
                layout: 'radio', // Displays options as radio buttons
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
