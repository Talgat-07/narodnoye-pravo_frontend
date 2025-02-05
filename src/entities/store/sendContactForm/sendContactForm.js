import { Api } from 'shared/api/Api';

export const sendContactForm = async (data) => {
    try {
        const response = await Api.post(`contactform/`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        throw error.response?.data || error.message
    }
};
