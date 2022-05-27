export const DateToView =(time:string|undefined|null)=>{

    if(!time||time===undefined){
        return '-/-/-'
    }
    const today = new Date(time);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    return  dd + '/' + mm + '/' + yyyy;
}