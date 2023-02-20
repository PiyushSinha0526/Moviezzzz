const convert = (x) =>{
    return Intl.NumberFormat('en-In', {
        style: 'currency',
        currency: 'INR'
    }).format(x)
}

export default convert