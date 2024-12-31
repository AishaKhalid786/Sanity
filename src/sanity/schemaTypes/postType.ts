//schema is the structure of your content.
//we need 4 things to make a schema. A title, A name ,A type and a field

import { defineField, defineType } from "sanity"


   const postType = defineType({
    title: "Post",
    name: "post",
    type: "document",
    fields: [
        defineField({
            title: "Post Title",
            name: "post title",
            type: "string",
        }),
        defineField({
            title: "Post Description",
            name: "post description",
            type: "string",
        })
    ]

})

export default postType