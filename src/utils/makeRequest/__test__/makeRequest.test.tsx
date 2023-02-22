import makeRequest  from '..';
import axios from 'axios';
import mockData from '../../../mocks/blogPosts'
import {BACKEND_URL ,GET_BLOG_DATA ,UPDATE_BLOG_DATA} from '../../../constants/apiEndPoints';
import { ERROR_ROUTE } from "../../../constants/routes";

jest.mock('axios');

describe('makeRequest', () => {
    afterEach(()=>{
        jest.clearAllMocks();
    })
    it('should make api request and return response body when request body is sent only with api end point',async()=>{
        const mockedAxios = axios as jest.MockedFunction<typeof axios>;
        mockedAxios.mockResolvedValue({data :mockData })
        expect(mockedAxios).toHaveBeenCalledTimes(0);
        const response = await makeRequest(GET_BLOG_DATA);
        expect(mockedAxios).toHaveBeenCalledTimes(1);
        expect(mockedAxios).toHaveBeenCalledWith({
            baseURL: BACKEND_URL,
            url: 'blog-posts',
            method: 'get',
        })
        expect(response).toEqual(mockData);
    });

    it('should make api request to update blog data and return response body when request is made along with api end point and data',async()=>{
        const mockedAxios = axios as jest.MockedFunction<typeof axios>;
        mockedAxios.mockResolvedValue({data : {data :{ clap : 1}}});
        expect(mockedAxios).toHaveBeenCalledTimes(0);
        const response = await makeRequest(UPDATE_BLOG_DATA(1),{
            data :{ clap:1}
        });
        expect(mockedAxios).toHaveBeenCalledTimes(1);
        expect(mockedAxios).toHaveBeenCalledWith({
            baseURL: BACKEND_URL,
            url: 'blog-posts/1',
            method: 'put',
            data : {
                clap:1
            },
        })
        expect(response).toEqual( {data : {clap:1}});
    });
    it('should navigate to error page with status code when api call return error with status code',async()=>{
        const mockNavigate = jest.fn();
        const mockedAxios = axios as jest.MockedFunction<typeof axios>;
        mockedAxios.mockRejectedValue({response:{status:500}});
        expect(mockNavigate).not.toHaveBeenCalled();
        await makeRequest(GET_BLOG_DATA,{},mockNavigate);
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/500`);
    });

    it('should navigate to error page without status code when api call return error without status code',async()=>{
        const mockNavigate = jest.fn();
        const mockedAxios = axios as jest.MockedFunction<typeof axios>;
        mockedAxios.mockRejectedValue({});
        expect(mockNavigate).not.toHaveBeenCalled();
        await makeRequest(GET_BLOG_DATA,{},mockNavigate);
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith(ERROR_ROUTE);
    });
});