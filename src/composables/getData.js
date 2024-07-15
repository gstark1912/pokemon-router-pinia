import {ref} from "vue"
import axios from "axios"

export const useGetData = () => {
    const data = ref(null);
    const errorData = ref(null);
    const loading = ref(true);
    const getData = async (url) => {
        try {
            loading.value = true;
            const res = await axios.get(url);                
            data.value = res.data;
        } catch (error) {
            errorData.value = error.message;
        }
        finally{
            loading.value = false;
        }
    }

    return {
        getData,
        data,
        errorData,
        loading
    }
}