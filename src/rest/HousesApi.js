const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses'

//Houses fetch calls
class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('fetchhouse issue', e);
        }
    }

//updates house that is put into it
put = async (house) => {
    try {
        const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(house)
        });
        return await resp.json();
    } catch(e) {
        console.log('house update error', e);
    }
 }

}

export const housesApi = new HousesApi();