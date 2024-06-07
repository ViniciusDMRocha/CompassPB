const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'O tour precisa de um nome'],
            unique: true,
            trim: true,
            maxlength: [40, 'O nome do tour deve ser igual ou menor que 40 caracteres'],
            minlength: [10, 'O nome do tour deve ser igual ou maior que 10 caracteres'],
            // validate: [validator.isAlpha, 'O nome do Tour só pode ter caracteres'],
        },
        slug: String,
        duration: {
            type: Number,
            required: [true, 'O tour precisa de uma duração'],
        },
        maxGroupSize: {
            type: Number,
            required: [true, 'O Tour precisa de um tamanho de grupo'],
        },
        difficulty: {
            type: String,
            required: [true, 'O Tour precisa ter uma dificuldade'],
            enum: {
                values: ['easy', 'medium', 'difficult'],
                message: 'Os possiveis niveis de dificuldade são: easy, medium, difficult',
            },
        },
        ratingsAverage: {
            type: Number,
            default: 3,
            min: [1.0, 'O Tour precisa ter uma nota média maior que 1.0'],
            max: [5.0, 'O Tour precisa ter uma nota média menor que 5.0'],
        },
        ratingsQuantity: {
            type: Number,
            default: 0,
        },
        price: {
            type: Number,
            required: [true, 'O tour precisa de preço'],
        },
        priceDiscount: {
            type: Number,
            validate: {
                validator: function (val) {
                    // this only points to current doc on NEW document creation
                    return val < this.price;
                },
                message: 'O desconto precisa ser menor que o preço da viagem',
            },
        },
        summary: {
            type: String,
            trim: true,
            required: [true, 'O tour precisa de uma descrição'],
        },
        description: {
            type: String,
            trim: true,
        },
        imageCover: {
            type: String,
            required: [true, 'O tour precisa de uma imagem'],
        },
        images: [String],
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false,
        },
        startDates: [Date],
        secretTour: {
            type: Boolean,
            default: false,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

tourSchema.virtual('durationWeeks').get(function () {
    return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: save() and create()
tourSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

// tourSchema.pre('save', function (next) {
//     console.log('Salvando o documento');
//     next();
// });

// tourSchema.post('save', function (doc, next) {
//     console.log(doc);
//     next();
// });

// QUERY MIDDLEWARE
// tourSchema.pre('find', function (next) {
tourSchema.pre(/^find/, function (next) {
    this.find({ secretTour: { $ne: true } });
    this.start = Date.now();
    next();
});

tourSchema.post(/^find/, function (docs, next) {
    console.log(`Chamada da Query: ${Date.now() - this.start} ms`);
    next();
});

// AGGREGATION MIDDLEWARE
tourSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
    next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
