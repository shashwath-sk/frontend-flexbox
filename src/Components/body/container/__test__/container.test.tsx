import {render , screen ,waitFor} from '@testing-library/react'
import Container from '../Container'
import blogData from '../../../../mocks/blogPosts';
import makeRequest from '../../../../utils/makeRequest';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../../utils/makeRequest');

describe('Container', () => {

    const mockedMakeRequest = makeRequest as jest.MockedFunction<
    typeof makeRequest
    >;

    afterEach(() => {
    jest.clearAllMocks();
    });
   
    it('should show loading text when data is not loaded',async()=>{
        mockedMakeRequest.mockResolvedValue(blogData);
        render(
            <BrowserRouter>
              <Container />
            </BrowserRouter>
          );
        expect(screen.getByText('Loading...')).toBeTruthy();
        await waitFor( ()=>{
            expect(screen.getByText('mock title 2')).toBeTruthy();
        });
    });
    it('should show the cards when data is loaded',async()=>{
        mockedMakeRequest.mockResolvedValue(blogData);
        render(
            <BrowserRouter>
              <Container />
            </BrowserRouter>
          );
        expect(screen.queryByTestId('card-test')).toBeFalsy();
        await waitFor( ()=>{
            expect(screen.getAllByTestId('card-test').length).toEqual(2);
        });
    });

    it('should show error message when there is error in data fetch',async()=>{
        mockedMakeRequest.mockRejectedValue({message: "Error!!!" })
        render(
            <BrowserRouter>
              <Container />
            </BrowserRouter>
          );
        expect(screen.queryByText('Error!!!')).toBeFalsy();
        await waitFor(()=>{
            expect(screen.getByText('Error!!!')).toBeTruthy();
        });
    });
});