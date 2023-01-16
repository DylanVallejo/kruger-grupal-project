import About from '../components/About'
import {render, screen} from '@testing-library/react';



describe('About', () => { 
    test('should render <About/>', () => {
        render(<About />);
        const about = screen.getByText(/dylan/i);
        expect(about).toBeInTheDocument;
    });
    
    test('should contain', () => {
        render(<About />);
        const enlace = screen.getAllByRole('link');
        expect(enlace).toBeInTheDocument;
        
    })
    
});

