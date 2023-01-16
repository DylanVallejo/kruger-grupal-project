import Contact from '../components/Contact'
import {render, screen} from '@testing-library/react';



describe('Contact', () => { 
    test('should render <Contact/>', () => {
        render(<Contact />);
        const contact = screen.getByText(/formulario de contacto/i);
        expect(contact).toBeInTheDocument;
    });
    
    
    test('shoudl contain a form', () => {
        render(<Contact />);
        const contact = screen.findByPlaceholderText(/nombres/i);
        expect(contact).toBeInTheDocument;
        
    } )
    
});
