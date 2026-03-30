import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';


describe('contact us page testcases',()=>{
 test("rendering contact us page",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument()
})

test("rendering button contact us page",()=>{
    render(<Contact/>);
    const button = screen.getByText("summit");

    expect(button).toBeInTheDocument()
})

test("rendering role contact us page",()=>{
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes).toHaveLength(2)
})
})

