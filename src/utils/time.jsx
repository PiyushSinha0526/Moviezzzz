const time = (min) => {
    const hours = min/60;
    const mins = min%60;
    return (<>{hours.toFixed()}H {mins}M</>)
}
time()

export default time