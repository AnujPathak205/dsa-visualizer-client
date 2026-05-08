export function handleMin(array,setStepArr,n,setOutput,setCurrentLineArr,setMessage,setMessageArr){
    let steps = [];
    let lines = [];
    let messages = [];
    let newArr = [...array];

    setStepArr([]);
    setOutput("");

    steps.push([...newArr]);
    lines.push(1);
    messages.push("Starting search for minimum value");

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
        messages.push(`Initialize minimum with first element # min = ${newArr[0].value}`);

        steps.push([...newArr]);
        lines.push(12);
        messages.push(`Traversing array`);

        let MIN = newArr[0].value;

        for(let i = 1; i < n; i++){

            newArr[i].state = "searching";

            steps.push(newArr.map(item => ({ ...item })));
            lines.push(13);
            messages.push(`Comparing current element with min # i = ${i} # current = ${newArr[i].value} # min = ${MIN}`);

            if(newArr[i].value < MIN){
                MIN = newArr[i].value;

                newArr[i].state = "found";

                steps.push(newArr.map(item => ({ ...item })));
                lines.push(15);
                messages.push(`New minimum found # i = ${i} # updated min = ${MIN}`);
            }

            newArr[i].state = "normal";

            steps.push(newArr.map(item => ({ ...item })));
            lines.push(12);
            messages.push(false);
        }

        steps.push([...newArr]);
        lines.push(20);
        messages.push(`Minimum value found # min = ${MIN}`);

        setOutput(`Min value: ${MIN}`);
    }

    setStepArr([...steps]);
    setCurrentLineArr([...lines]);
    setMessageArr([...messages]);
}