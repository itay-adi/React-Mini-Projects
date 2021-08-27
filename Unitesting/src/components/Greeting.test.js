import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react'

describe('Greeting  component', () => {
    test('renders Hello World as a text',() => {
        //Arrange
        render(<Greeting/>);
   
        //act
        //...nothing here
   
        //assert
        const HWe = screen.getByText('Hello World', { exact: false });
        expect(HWe).toBeInTheDocument();
   });

   test('renders good to see you if the button was not clicked', () => {
        render(<Greeting/>);

        const ope = screen.getByText('good to see you', { exact: false });
        expect(ope).toBeInTheDocument();
   });
});