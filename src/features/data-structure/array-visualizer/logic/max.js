export function handleMax(array,setStepArr,n,setOutput,setCurrentLineArr,setMessage,setMessageArr){
    let steps = [];
    let lines = [];
    let messages = [];
    let newArr = [...array];

    setStepArr([]);
    setOutput("");

    steps.push([...newArr]);
    lines.push(1);
    messages.push("Starting search for maximum value");

    if(n == 0){
        setOutput("Array is empty");

        steps.push([...newArr]);
        lines.push(3);
        messages.push("Array is empty # no elements to compare");

        steps.push([...newArr]);
        lines.push(4);
        messages.push(false);

        steps.push([...newArr]);
        lines.push(5);
        messages.push(false);

    } else {

        steps.push([...newArr]);
        lines.push(9);
        messages.push(`Initialize maximum with first element # max = ${newArr[0].value}`);

        steps.push([...newArr]);
        lines.push(12);
        messages.push(`Traversing array`);

        let MAX = newArr[0].value;

        for(let i = 1; i < n; i++){

            newArr[i].state = "searching";

            steps.push(newArr.map(item => ({ ...item })));
            lines.push(13);
            messages.push(`Comparing current element with max # i = ${i} # current = ${newArr[i].value} # max = ${MAX}`);

            if(newArr[i].value > MAX){
                MAX = newArr[i].value;

                newArr[i].state = "found";

                steps.push(newArr.map(item => ({ ...item })));
                lines.push(15);
                messages.push(`New maximum found # i = ${i} # updated max = ${MAX}`);
            }

            newArr[i].state = "normal";

            steps.push(newArr.map(item => ({ ...item })));
            lines.push(12);
            messages.push(false);
        }

        steps.push([...newArr]);
        lines.push(20);
        messages.push(`Maximum value found # max = ${MAX}`);

        setOutput(`Max value: ${MAX}`);
    }

    setStepArr([...steps]);
    setCurrentLineArr([...lines]);
    setMessageArr([...messages]);
}