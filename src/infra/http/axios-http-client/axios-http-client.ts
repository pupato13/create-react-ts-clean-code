import axios, { AxiosResponse } from "axios";
import {
    HttpGetParams,
    HttpPostParams,
    HttpResponse,
    IHttpGetClient,
    IHttpPostClient,
} from "@/data/protocols/http";

export class AxiosHttpClient implements IHttpPostClient, IHttpGetClient {
    async post(params: HttpPostParams): Promise<HttpResponse> {
        let axiosResponse: AxiosResponse;

        try {
            axiosResponse = await axios.post(params.url, params.body);
        } catch (error) {
            axiosResponse = error.response;
        }

        return this.adapt(axiosResponse);
    }

    async get(params: HttpGetParams): Promise<HttpResponse> {
        let axiosResponse: AxiosResponse;

        try {
            axiosResponse = await axios.get(params.url, {
                headers: params.headers,
            });
        } catch (error) {
            axiosResponse = error.response;
        }

        return this.adapt(axiosResponse);
    }

    private adapt = (axiosResponse: AxiosResponse): HttpResponse => ({
        statusCode: axiosResponse.status,
        body: axiosResponse.data,
    });
}
