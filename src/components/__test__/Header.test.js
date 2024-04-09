import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import HeaderComponent from "../Header";
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it("Should load Header Component with a Login Button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <HeaderComponent/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button")

    expect(loginButton).toBeInTheDocument();
})


it("Should change login to logout on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <HeaderComponent/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Log IN"})
    
    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole("button", {name: "Log OUT"})

    expect(logoutButton).toBeInTheDocument();
})