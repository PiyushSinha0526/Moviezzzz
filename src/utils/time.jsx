const time = (min) => {
    const hours = Math.floor(min/60);
    const mins = Math.floor(min%60);
    return (<>{hours.toFixed()}H {mins}M</>)
}
time()

export default time