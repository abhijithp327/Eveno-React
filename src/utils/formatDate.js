
export const formatDate = (date) => {
    if (!date) return;
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const normalDateTime = new Date(date).toLocaleString('en-IN', options);
    return normalDateTime;
}



// for edible print

// export const EdibleFormatDate = (date) => {
//     if (!date) return;
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     const normalDateTime = new Date(date).toLocaleString('en-IN', options);
//     return normalDateTime;
// }