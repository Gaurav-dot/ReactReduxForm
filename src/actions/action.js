const addFormData = (records) => {
    return {
        type: "ADDFORMDATA",
        payload: {
            id: new Date(),
            records: records
        }
    }
}