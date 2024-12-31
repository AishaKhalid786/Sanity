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