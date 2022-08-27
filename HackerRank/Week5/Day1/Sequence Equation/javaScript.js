const permutationEquation = (p) => {
    let values = (p || []).reduce((target, value, index) => {
        target[value] = index + 1;

        return target;
    }, []);

    return (p || []).reduce((target, value, index) => {
        target.push(values[values[index + 1]]);

        return target;
    }, []);
};

console.log(permutationEquation([5, 2, 1, 3, 4]));
