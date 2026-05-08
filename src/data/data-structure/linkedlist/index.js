import { linkedlistInfo } from "./meta/info";
import { operations } from "./meta/operations";
import { questions } from "./meta/questions";
import { quiz } from "./meta/quizzes";

// Core operations

import { addFirst } from "./code/coreOperations/addFirst";
import { addLast } from "./code/coreOperations/addLast";
import { add } from "./code/coreOperations/add";
import { removeFirst } from "./code/coreOperations/removeFirst";
import { removeLast } from "./code/coreOperations/removeLast";
import { remove } from "./code/coreOperations/remove";
import { traverse } from "./code/coreOperations/traverse";

// Utility operations

import { get } from "./code/utilityOperations/get";
import { update } from "./code/utilityOperations/update";
import { search } from "./code/utilityOperations/search";
import { isEmpty } from "./code/utilityOperations/isEmpty";
import { size } from "./code/utilityOperations/size";

// Advance operations

import { midNode } from "./code/advanceOperations/midNode";

export const linkedListData = {
    ...linkedlistInfo,
    operations,
    questions,
    quiz,

    code:{
        addFirst,
        addLast,
        add,
        removeFirst,
        removeLast,
        remove,
        traverse,

        get,
        update,
        search,
        isEmpty,
        size,

        midNode
    }
}