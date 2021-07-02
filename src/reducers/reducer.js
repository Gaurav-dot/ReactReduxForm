const initialData = {
    records: []
}

const reducer = (state=initialData, action) => {
    switch(action.type){
        case "ADDFORMDATA":
            const {id, records} = action.payload;
            return {
                ...state,
                data : [
                    ...state.records,
                    {
                        id: id,
                        records: records
                    }]
            }
            default: return state;
    }

}

export default reducer;