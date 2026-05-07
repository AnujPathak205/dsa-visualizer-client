import { arrayInfo } from "./meta/info";
import { operations } from "./meta/operations";
import { questions } from "./meta/questions";
import { quiz } from "./meta/quizzes";

import { insertion } from "./code/insertion";
import { deletion } from "./code/deletion";
import { search } from "./code/search";
import { reverse } from "./code/reverse";
import { min } from "./code/min";
import { max } from "./code/max";


export const arrayData = {
    ...arrayInfo,
    operations,
    questions,
    quiz,

    code:{
        insertion,
        deletion,
        search,
        reverse,
        min,
        max
    }
}

