import {render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

// test("Should load contact us component", () => {
//     render(<Contact/>);
//     const heading = screen.getByRole("heading");
//     expect(heading).toBeInTheDocument();
// });

// test("Should load contact us component", () => {
//     render(<Contact />);
//     const heading = screen.getByText(/Contact Us Page/i);  // Match by text content
//     expect(heading).toBeInTheDocument();
// });

test('renders learn react link', () => {
    render(<Contact />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  