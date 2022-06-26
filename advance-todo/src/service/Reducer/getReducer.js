export function getReducer(TYPE) {
    return ( state = "intial State", {type,payload})  => {
        try {
            switch (type) {
                case TYPE:return { state: state, data: payload };
                case TYPE+"_ERROR":return { state: state, data: payload };
                default:return "state";
            }
    
        }
        catch (e) {
            console.log('errrrrrrrrrrrrrrrrr', e)
        }
    }
}