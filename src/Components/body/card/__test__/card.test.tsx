import Card from '../Card';
import {render, fireEvent,screen, waitFor} from '@testing-library/react';
import blogData from '../../../../mocks/blogPosts';

jest.mock('../../../../utils/makeRequest');
describe("Card Component",()=>{
    afterEach(()=>{
        jest.clearAllMocks();
    })
    it('should display a clap count when card is rendered',()=>{
        render(<Card blogData={blogData[0]}/>);
        expect(screen.getByText(10)).toBeTruthy();
    });
    it('should increment clap count by 1 when clap icon is clicked once',async()=>{
        render(<Card blogData={blogData[0]}/>);
        const clapIcon = screen.getByAltText('clap-icon');
        fireEvent.click(clapIcon);
        await waitFor(()=>{
            expect(screen.getByText(11)).toBeTruthy();
        })
    });
    // it('should decrement clap count by 1 when clap icon is clicked twice',()=>{
    //     render(<Card blogData={blogData[0]}/>);
    //     const clapIcon = screen.getByAltText('clap-icon');
    //     fireEvent.click(clapIcon);
    //     fireEvent.click(clapIcon);
    //     expect(screen.getByText(10)).toBeTruthy();
    // });
    it('should display heart icon when card is rendered',()=>{
        render(<Card blogData={blogData[0]}/>);
        expect(screen.getByAltText('heart-icon')).toBeTruthy();
    });
    it('should display red-heart icon when clicked on black-heart icon',async()=>{
        render(<Card blogData={blogData[0]}/>);
        const heartIcon = screen.getByAltText('heart-icon');
        fireEvent.click(heartIcon);
        await waitFor(()=>{
            expect(heartIcon.getAttribute('src')).toEqual('heart-red.svg');
        })
    });
    it('should display black-heart icon when clicked on red-heart icon',async()=>{
        render(<Card blogData={blogData[0]}/>);
        const heartIcon = screen.getByAltText('heart-icon');
        fireEvent.click(heartIcon);
        fireEvent.click(heartIcon);
        await waitFor(()=>{
            expect(heartIcon.getAttribute('src')).toEqual('heart-black.svg');
        })
    });
});