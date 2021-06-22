const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Person = new Schema({

    name: {
        type: String,
        required: [true, "Campo obrigatório"]
    },
    birth_date: {
        type: Date,
        required: [true, "Campo obrigatório"]
    },
    locality: {
        adress: {
            type: String,
        },
        number: {
            type: Number,
        },
        postal_code: {
            type: String
        },
        city: {
            id: {
                type: Number,
            },
            name: {
                type: String,
            }
        },
        state: {
            id: {
                type: Number,
            },
            name: {
                type: String,
            }
        },
        country: {
            id: {
                type: Number,
            },
            name: {
                type: String,
            }
        },
        telephone: {
            type: String,
            required: [true, "Campo obrigatório"]
        },
        email: {
            type: String,
            required: [true, "Campo obrigatório"]
        }
    },
    physical_characteristics: {
        eye_color: {
            type: String,
        },
        hair_color: {
            type: String,
        },
        without_hair: {
            type: Boolean,
        },
        height: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        tattoo: [{
            locality: {
                type: String,
            },
            description: {
                type: String,
            }
        }],
        disabled_person: {
            type: Boolean,
        },
        others: {
            type: String,
        },
    },
    important_informations: {
        last_clothes: {
            type: String
        },
        last_place: {
            type: String
        }
    },
    image_id: {
        type: String
    }
});
const person = mongoose.model('person', Person);
module.exports = person;

