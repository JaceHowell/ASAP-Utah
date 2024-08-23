import db from "../config/db.js"
import Stat from "../models/model.js";

await db.sync({force: true});

const y10 = await Stat.create({
    year: 2010,
    intakes: 72,
    adoptions: 0,
    relocations: 0
})

const y11 = await Stat.create({
    year: 2011,
    intakes: 138,
    adoptions: 72,
    relocations: 0
})

const y12 = await Stat.create({
    year: 2012,
    intakes: 177,
    adoptions: 163,
    relocations: 100
})

const y13 = await Stat.create({
    year: 2013,
    intakes: 276,
    adoptions: 174,
    relocations: 348
})

const y14 = await Stat.create({
    year: 2014,
    intakes: 326,
    adoptions: 219,
    relocations: 162
})

const y15 = await Stat.create({
    year: 2015,
    intakes: 630,
    adoptions: 407,
    relocations: 195
})

const y16 = await Stat.create({
    year: 2016,
    intakes: 891,
    adoptions: 531,
    relocations: 349
})

const y17 = await Stat.create({
    year: 2017,
    intakes: 961,
    adoptions: 744,
    relocations: 360
})

const y18 = await Stat.create({
    year: 2018,
    intakes: 1134,
    adoptions: 501,
    relocations: 478
})

const y19 = await Stat.create({
    year: 2019,
    intakes: 1392,
    adoptions: 637,
    relocations: 669
})

const y20 = await Stat.create({
    year: 2020,
    intakes: 1450,
    adoptions: 674,
    relocations: 533
})

const y21 = await Stat.create({
    year: 2021,
    intakes: 1282,
    adoptions: 747,
    relocations: 533
})

// export const intakes = Stat.findAll({
//       attributes: ['year', 'intakes']
//     });
// export const adoptions = Stat.findAll({
//       attributes: ['year', 'adoptions']
//     });
// export const relocations = Stat.findAll({
//       attributes: ['year', 'relocations']
//     });