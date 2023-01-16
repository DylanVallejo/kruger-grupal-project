import Footer from '../components/Footer'
import {render, screen} from '@testing-library/react';



describe('Footer', () => { 
    test('should render <Footer/>', () => {
        render(<Footer />);
        const footer = screen.getByText(/kruger/i);
        expect(footer).toBeInTheDocument;
    });
    
});

