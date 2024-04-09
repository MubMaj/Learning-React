import { render, screen } from "@testing-library/react"
import ContactComponent from "../Contact"
import "@testing-library/jest-dom"

test('Should load Contact Us Component', () => {
    render(<ContactComponent />);
    
    const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
});

test('Should load Contact Us Component', () => {
    render(<ContactComponent />);
    
    const button = screen.getByRole('button');
    
        expect(button).toBeInTheDocument();
});

test('Should load Contact Us Component', () => {
    render(<ContactComponent />);
    
    const inputName = screen.getByPlaceholderText('Name');
    
        expect(inputName).toBeInTheDocument();
});