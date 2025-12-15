import { apiParams } from "../api";

export const getLastUpdatedDDJJ = async (params) => {
    const res = await apiParams("GET", params, `declaracionJurada/lastUpdated/`, "");
    if (res.status === 200) {
        const data = res.data;
        return data;
    }
};

