const time = (min) => {
    const hours = min/60;
    const mins = min%60;
    return (<span>{hours.toFixed()} H {mins} M</span>)
}
time()

export default time