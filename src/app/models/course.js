const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        videoid: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
