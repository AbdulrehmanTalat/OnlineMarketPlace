export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'gender',
            title: 'Gender',
            type: 'string'
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string'
        },
        {
            name: 'size',
            title: 'Size',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        },
        {
            name: 'use',
            title: 'Use',
            type: 'string'
        },
        {
            name: 'images',
            title: 'Images',
            type: 'image'
        },
    ]
}