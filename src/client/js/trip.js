const tripLength = (start, end) => {
    const begin = new Date(start.replace(/-/g, ","));
    const finish = new Date(end.replace(/-/g, ","));

    let beginUnix = begin.getTime();
    let finishUnix = finish.getTime();

    let seconds = (finishUnix - beginUnix) / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;

    console.log("final answer issssss" + parseInt(days + 1));
}

export { tripLength }