import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';   // ✅ FIXED
import Hero from "../landing_page/home/Hero";

describe('Hero Component', () => {

    test('renders hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");

        expect(heroImage).toBeInTheDocument();
        // component uses SVG asset
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.svg");
    });

});